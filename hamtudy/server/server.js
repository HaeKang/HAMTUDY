const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

var connection = require("./routes/mysql_con");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser());

app.listen(port, function(){
    console.log(`서버가 ${port}번 포트에서 실행중 입니다.`);
});


app.get('/', function(req,res){
	res.send("hello");
});



// 로그인 https://wonit.tistory.com/305
app.post('/login', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;

	var sql = 'select useridx, user_nick from user where user_id = ? and user_pw = ?';
    connection.query(sql, [id,pw], function(error,result){
        if(error){
            console.log(error);
        } else{
            var user_idx = result[0].user_idx;
            var user_nick = result[0].user_nick;
            var user_id = id;
            res.send({"user_id" : user_id,  "user_idx" : user_idx, "user_nick" : user_nick});
        }
    });
});

// 스터디룸 생성
app.post('/createStudyRoom', function(req, res){
    var user_idx = req.body.user_idx;
    var title = req.body.title;
    var desc = req.body.desc;

    var sql = 'insert into room_list(user_idx, title, descr) values(?, ?, ?)';

    connection.query(sql, [user_idx,title,desc], function(error,result){
        if(error){
            console.log(error);
            res.send({"state" : "실패"});
        } else{
            res.send({"state" : "성공"});
        }
    });

});

// 전체 스터디룸 목록
app.post('/listStudyRoom', function(req, res){
    // room_id, user_idx, title, descr
    var sql = 'select * from room_list';

    connection.query(sql,  function(error,result){
        if(error){
            console.log(error);
            res.send({"state" : "실패"});
        } else{
            var room_id = result[0].room_id;
            var user_idx = result[0].user_idx;
            var title = result[0].title;
            var descr = result[0].descr;

            res.send(result);
        }
    });

});


// 내가 만든 스터디룸 목록
app.post('/listMyStudyRoom', function(req, res){
    var user_idx = req.body.user_idx;

    var sql = 'select room_id, user_idx, title, descr from room_list a, user b where a.user_idx = b.useridx and a.user_idx = ?';

    connection.query(sql, [user_idx], function(error,result){
        if(error){
            console.log(error);
            res.send({"state" : "실패"});
        } else{
            var room_id = result[0].room_id;
            var user_idx = result[0].user_idx;
            var title = result[0].title;
            var descr = result[0].descr;

            res.send({"room_id" : room_id,  "user_idx" : user_idx, "title" : title, "descr" : descr });
        }
    });

})
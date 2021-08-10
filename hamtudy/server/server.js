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
    })
});


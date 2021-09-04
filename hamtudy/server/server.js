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


// idx를 id로
app.post('/idxToid', function(req, res){
    var idx = req.body.user_idx;
    var sql = 'select user_id from user where useridx = ?';
    connection.query(sql, [idx], function(error,result){
        if(error){
            console.log(error);
        } else{
            var user_id = result[0].user_id;
            res.send({"user_id" : user_id});
        }
    });

});

// id를 idx로
app.post('/idToidx', function(req, res){
    var id = req.body.user_id;
    var sql = 'select useridx from user where user_id = ?';
    connection.query(sql, [id], function(error,result){
        if(error){
            console.log(error);
        } else{
            var user_idx = result[0].user_idx;
            res.send({"user_idx" : user_idx});
        }
    });

});

// Sign Up & In Start -------------------------------------------------------------------------------

// 회원가입
app.post('/SignUp', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;
    var nickname = req.body.user_nick;

	var sql = 'insert into user(user_id, user_pw, user_nick) values(?,?,?)';
    connection.query(sql, [id,pw,nickname], function(error,result){
        if(error){
            console.log(error);
            res.send({"state" : "실패"});
        } else{
            res.send({"state" : "성공"});
        }
    });
});

// 로그인
app.post('/login', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;

	var sql = 'select useridx, user_nick from user where user_id = ? and user_pw = ?';
    connection.query(sql, [id,pw], function(error,result){
        if(error){
            console.log(error);
            res.send({"state" : "실패"});
        } else{
            var user_idx = result[0].user_idx;
            var user_nick = result[0].user_nick;
            var user_id = id;
            res.send({"user_id" : user_id,  "user_idx" : user_idx, "user_nick" : user_nick});
        }
    });
});


// Sign Up & In  End -------------------------------------------------------------------------------


// StudyRoom Create & list & delete Start-------------------------------------------------------------------------------

// 스터디룸 생성
app.post('/createStudyRoom', function(req, res){
    var user_idx = req.body.user_idx;
    var title = req.body.title;
    var desc = req.body.desc;
    var color = req.body.desc;

    var sql = 'insert into room_list(user_idx, title, descr, color) values(?, ?, ?, ?)';

    connection.query(sql, [user_idx,title,desc,color], function(error,result){
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
            res.send(result);
        }
    });

});


// 내가 만든 스터디룸 목록
app.post('/listMyStudyRoom', function(req, res){
    var user_id = req.body.user_id;
    var sql_user_idx = 'select useridx from user where user_id = ?';

    // idx 구함
    connection.query(sql_user_idx, [user_id], function(error,result){
        if(error){

            console.log(error);
            res.send({"state" : "조회실패"});

        } else{
            var user_idx = result[0].useridx

            // 내가 만든 스터디룸 목록
            var sql = 'select room_id, user_idx, title, descr, color from room_list a, user b where a.user_idx = b.useridx and a.user_idx = ?';
            connection.query(sql, [user_idx], function(err, result){
                if(err){
                    console.log(err);
                    res.send({"state" : "실패"});
                } else{
                    res.send(result);
                }
            });

        }
    });

});

// 스터디룸 삭제 
app.post('/deleteStudyRoom', function(req, res){
    var room_id = req.body.room_id;

    var sql = "delete from room_list where room_id = ?";

    connection.query(sql, [room_id], function(error,result){
        if(error){

            console.log(error);
            res.send({"state" : "삭제실패"});

        } else{
            res.send({"state" : "성공"});
        }
    });

});

// StudyRoom Create & list & delete End -------------------------------------------------------------------------------


// StudyRoom Join & Out start-------------------------------------------------------------------------------

// 스터디룸 참여
app.post('/joinStudyRoom', function(req, res){
    var room_id = req.body.room_id;
    var user_id = req.body.user_id;

    var sql_user_idx = 'select useridx from user where user_id = ?';

    // user_idx 구함
    connection.query(sql_user_idx, [user_id], function(error,result){
        if(error){

            console.log(error);
            res.send({"state" : "조회실패"});

        } else{
            // 스터디룸 참여 실행
            var user_idx = result[0].useridx
            var sql = 'insert into join_info(room_id, user_idx) values(?,?)';
            connection.query(sql, [room_id, user_idx], function(err, result){
                if(err){
                    console.log(err);
                    res.send({"state" : "삽입실패"});
                } else{
                    res.send({"state" : "성공"});
                }
            });

        }
    });

});
 
// 스터디룸 나가기 ~ 실행안됨 수정필요
app.post('/exitStudyRoom', function(req, res){
    var room_id = req.body_room_id;
    var user_id =  req.body.user_id;

    var sql_user_idx = 'select useridx from user where user_id = ?';

    // user_idx 구함
    connection.query(sql_user_idx, [user_id], function(error,result){
        if(error){

            console.log(error);
            res.send({"state" : "조회실패"});

        } else{
            // join_info delete 수행 ~ 실행안됨 수정필요
            var user_idx = result[0].useridx
            var sql = 'delete from join_info where room_id = ? and user_idx = ?';
            connection.query(sql, [room_id, user_idx], function(err, result){
                if(err){
                    console.log(err);
                    res.send({"state" : "삭제실패"});
                } else{
                    res.send({"state" : "성공"});
                }
            });

        }
    });
});

// StudyRoom Join & Out End -------------------------------------------------------------------------------


// Chatting Start-------------------------------------------------------------------------------


// Chatting End-------------------------------------------------------------------------------

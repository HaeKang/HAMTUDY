const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

//const multer = require("multer");
//const path = require("path");

var connection = require("./routes/mysql_con");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser());


app.listen(port, function(){
    console.log(`서버가 ${port}번 포트에서 실행중 입니다.`);
});

// socket
app.io = require('socket.io')();

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
            var user_idx = result[0].useridx;
            res.send({"user_idx" : user_idx});
        }
    });

});

// 이미지
// 이미지 파트
// var storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, "/img/");
//     },
//     filename : function(req, file, cb){
//         const ext = path.extname(file.originalname);
//         cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
//     },
// });

// var upload = multer({storage : storage});


// 회원 정보 관리 Start -------------------------------------------------------------------------------

// 회원가입
// app.post('/SignUp', upload.single("image"), function(req,res){
//     var id = req.body.user_id;
//     var pw = req.body.user_pw;
//     var nickname = req.body.user_nick;
//     var total_studytime = 0
//     var image = `/img/${req.file.filename}`;

//     const datas = [id,pw,nickname,total_studytime,image];

// 	var sql = 'insert into user(id, pw, nickname, total_studytime, img) values(?,?,?,?, ?)';
//     connection.query(sql, datas, function(error,result){
//         if(error){
//             console.log(error);
//             res.send({"state" : "실패"});

//         } else{
//             res.send({"state" : "성공"});
//         }
//     });
// });

// 얘는 됨
app.post('/SignUp', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;
    var nickname = req.body.user_nick;
    var total_studytime = 0
    //var image = `/img/${req.file.filename}`;
    var image = '';

    const datas = [id,pw,nickname,total_studytime,image];

	var sql = 'insert into user(id, pw, nickname, total_studytime, img) values(?,?,?,?, ?)';
    connection.query(sql, datas, function(error,result){
        if(error){
            console.log(error);
            res.status(404).send('Sorry, we cannot find SignUp!');
            res.end();

        } else{
            res.send({"state" : "성공"});
            res.end();
        }
    });
});


// 로그인
app.post('/Login', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;

	var sql = 'select idx, nickname from user where id = ? and pw = ?';
    connection.query(sql, [id,pw], function(error,result){
        if(error){
            console.log(error);
            res.status(404).send('Sorry, we cannot find Login!');
        } else{
            var user_idx = result[0].idx;
            var user_nick = result[0].nickname;
            var user_id = id;
            console.log("test");
            res.send({"user_id" : user_id,  "user_idx" : user_idx, "user_nick" : user_nick});
            res.end();
        }
    });

});


// 내정보
app.post('/MyInfo', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;

	var sql = 'select idx, nickname, total_studytime, img from user where id = ? and pw = ?';
    connection.query(sql, [id,pw], function(error,result){
        if(error){
            console.log(error);
            res.status(404).send('Sorry, we cannot find MyInfo!');
        } else{
            var user_idx = result[0].idx;
            var user_nick = result[0].nickname;
            var total_studytime = result[0].total_studytime;
            var img = result[0].img
            var user_id = id;
            res.send({"user_id" : user_id,  "user_idx" : user_idx, "user_nick" : user_nick,
        "total_studytime" : total_studytime, "img" : img});
        }
    });
});

// 수정하기 ~ 수정할 데이터 뭐받을지 필요함 수정필요
app.post('/Modify', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;

	var sql = 'select idx, nickname from user where id = ? and pw = ?';
    connection.query(sql, [id,pw], function(error,result){
        if(error){
            console.log(error);
            res.status(404).send('Sorry, we cannot find Modify!');
        } else{
            var user_idx = result[0].idx;
            var user_nick = result[0].nickname;
            var user_id = id;
            res.send({"user_id" : id,  "user_idx" : user_idx, "user_nick" : user_nick});
        }
    });
});

// 회원 정보 관리  End -------------------------------------------------------------------------------


// StudyRoom Create & list & delete Start-------------------------------------------------------------------------------

// 스터디룸 생성
app.post('/CreateStudyRoom', function(req, res){
    var user_id = req.body.user_id;
    var title = req.body.title;
    var desc = req.body.desc;
    var thumbnail = req.body.thumbnail;
    var total_studytime = 0;
    var hashtag = req.body.hashtag;
    var flag = 1;
    const datas = [user_id, title, desc, thumbnail, total_studytime, hashtag, flag]

    var sql = 'insert into room_list(user_id, title, descr, thumnail, total_studytime, hashtag, flag) values(?, ?, ?, ?, ?, ?, ?)';

    connection.query(sql, datas, function(error,result){
        if(error){
            res.status(404).send('Sorry, we cannot find CreateStudyRoom!');
        } else{
            res.send({"status" : "성공"});
        }
    });

});

// 전체 스터디룸 목록 -> get
app.post('/ListStudyRoom', function(req, res){
    // room_id, user_idx, title, descr
    var sql = 'select * from room_list';

    connection.query(sql,  function(error,result){
        if(error){
            res.status(404).send('Sorry, we cannot find ListStudyRoom!');
        } else{
            var result_list = new Array();

            for (var i = 0; i < result.length; i++){
                
                var data = new Object();

                data.room_id =  result[i].ROOM_ID;
                data.title = result[i].TITLE;
                data.descr = result[i].DESCR;
                data.thumbnail = result[i].THUMNAIL;
                data.total_studytime =  result[i].TOTAL_STUDYTIME;
                data.hashtag = result[i].HASHTAG;
                data.flag = result[i].FLAG;
                data.user_id = result[i].user_id;

                result_list.push(data);
            }
            
            var jsonData = JSON.stringify(result_list);
            res.send(jsonData);
        }
    });

});


// 내가 만든 스터디룸 목록 -> get
app.post('/ListMyStudyRoom', function(req, res){
    var user_id = req.body.user_id;

    // 내가 만든 스터디룸 목록
    var sql = 'select * from room_list where user_id = ?';
    connection.query(sql, [user_id], function(err, result){
        if(err){
            res.status(404).send('Sorry, we cannot find ListMyStudyRoom!');
        } else{
            var result_list = new Array();

            for (var i = 0; i < result.length; i++){
                
                var data = new Object();

                data.room_id =  result[i].ROOM_ID;
                data.title = result[i].TITLE;
                data.descr = result[i].DESCR;
                data.thumbnail = result[i].THUMNAIL;
                data.total_studytime =  result[i].TOTAL_STUDYTIME;
                data.hashtag = result[i].HASHTAG;
                data.flag = result[i].FLAG;
                data.user_id = result[i].user_id;

                result_list.push(data);
            }
            
            var jsonData = JSON.stringify(result_list);
            res.send(jsonData);
        }
    });

});

// 내가 참여중인 스터디룸 목록
app.post('/ListJoinStudyRoom', function(req,res){
    var user_id = req.body.user_id;

    var sql = 'select * from room_list where room_id = (select room_id from join_info where user_id = ?)';
    connection.query(sql, [user_id], function(err, result){
        if(err){
            res.status(404).send('Sorry, we cannot find ListJoinStudyRoom!');
        } else{
            var result_list = new Array();

            for (var i = 0; i < result.length; i++){
                
                var data = new Object();

                data.room_id =  result[i].ROOM_ID;
                data.title = result[i].TITLE;
                data.descr = result[i].DESCR;
                data.thumbnail = result[i].THUMNAIL;
                data.total_studytime =  result[i].TOTAL_STUDYTIME;
                data.hashtag = result[i].HASHTAG;
                data.flag = result[i].FLAG;
                data.user_id = result[i].user_id;

                result_list.push(data);
            }
            
            var jsonData = JSON.stringify(result_list);
            res.send(jsonData);
        }
    });
});

// [제약조건 추가 필요] 스터디룸 삭제
app.post('/DeleteStudyRoom', function(req, res){
    var room_id = req.body.room_id;

    var sql = "delete from room_list where room_id = ?";

    connection.query(sql, [room_id], function(error,result){
        if(error){

            console.log(error);
            res.status(404).send('Sorry, we cannot find DeleteStudyRoom!');

        } else{
            res.send({"state" : "성공"});
        }
    });

});



// StudyRoom Create & list & delete End -------------------------------------------------------------------------------


// StudyRoom Join & Out start-------------------------------------------------------------------------------

// 스터디룸 참여
app.post('/JoinStudyRoom', function(req, res){
    var room_id = req.body.room_id;
    var user_id = req.body.user_id;

    // 스터디룸 참여 실행
    var sql = 'insert into join_info(room_id, user_id,flag) values(?,?,1)';

    connection.query(sql, [room_id, user_id], function(err, result){
        if(err){
            console.log(error);
            res.status(404).send('Sorry, we cannot find JoinStudyRoom!');

        } else{
            res.send({"status" : "성공"});
        }
    });

});
 
//[제약조건 필요] 스터디룸 나가기
app.post('/ExitStudyRoom', function(req, res){
    var room_id = req.body_room_id;
    var user_id =  req.body.user_id;

    // 스터디룸 나가기 실행
    var sql = 'delete from join_info where room_id = ? and user_id = ?';

    connection.query(sql, [room_id, user_id], function(err, result){
        if(err){
            console.log(error);
            res.status(404).send('Sorry, we cannot find ExitStudyRoom!');

        } else{
            res.send(result);
        }
    });

});

// StudyRoom Join & Out End -------------------------------------------------------------------------------


// Chatting Start-------------------------------------------------------------------------------
// https://geundung.dev/61?category=719250

app.io.on('connection', function(socket){
    
    // 유저 채팅 접속
    socket.on('newUserJoin', function(nickname){
        console.log(nickname + '님이 접속하셨습니다.');
        // 소켓에 닉네임 저장
        socket.nickname = nickname;

        // 모든 소켓에게 알림
        app.io.emit('update', {type:'connect', name : 'SERVER', message : nickname + '님이 접속하셨습니다.'});
    });

    // 메시지 받기
    socket.on('message', function(data){
        // 누가 보낸 데이터인지 저장
        data.name = socket.nickname;
        console.log(data);

        // 보낸 사람 제외 모두에게 메시지 전송
        socket.broadcast.emit('update', data);
    });

    // 유저 채팅 나감
    socket.on('disconnect', function(){
        console.log('접속종료');

        socket.broadcast.emit('update', {type:'disconnect', name:'SERVER', message: socket.nickname + '님이 나가셨습니다.'});

    });
});
// Chatting End-------------------------------------------------------------------------------

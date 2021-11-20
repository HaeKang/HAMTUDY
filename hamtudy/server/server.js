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

// 회원 정보 관리 Start -------------------------------------------------------------------------------

// 회원가입
app.post('/SignUp', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;
    var nickname = req.body.user_nick;
    var total_studytime = 0

	var sql = 'insert into user(id, pw, nickname, total_studytime) values(?,?,?,?)';
    connection.query(sql, [id,pw,nickname, total_studytime], function(error,result){
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

	var sql = 'select idx, nickname from user where id = ? and pw = ?';
    connection.query(sql, [id,pw], function(error,result){
        if(error){
            console.log(error);
            res.send({"state" : "실패"});
        } else{
            var user_idx = result[0].idx;
            var user_nick = result[0].nickname;
            var user_id = id;
            res.send({"user_id" : id,  "user_idx" : user_idx, "user_nick" : user_nick});
        }
    });
});


// 회원 정보 수정
app.post('/modify', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;

	var sql = 'select idx, nickname from user where id = ? and pw = ?';
    connection.query(sql, [id,pw], function(error,result){
        if(error){
            console.log(error);
            res.send({"state" : "실패"});
        } else{
            var user_idx = result[0].idx;
            var user_nick = result[0].nickname;
            var user_id = id;
            res.send({"user_id" : id,  "user_idx" : user_idx, "user_nick" : user_nick});
        }
    });
});

// 내정보
app.post('/myinfo', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;

	var sql = 'select idx, nickname from user where id = ? and pw = ?';
    connection.query(sql, [id,pw], function(error,result){
        if(error){
            console.log(error);
            res.send({"state" : "실패"});
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
app.post('/createStudyRoom', function(req, res){
    // 아이디로 바꾸끼
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
            res.send({"status" : "어쩔티비"});
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

// [수정필요] 스터디룸 삭제
app.post('/deleteStudyRoom', function(req, res){
    var room_id = req.body.room_id;

    var sql = "delete from room_list where room_id = ?";

    connection.query(sql, [room_id], function(error,result){
        if(error){

            console.log(error);
            // 실패하는 경우엔 참여자가 한명 이상이기 때문
            // cascade 추가하던가.. 머.. 어케 할지 고민
            res.send({"state" : "삭제실패", "errmsg" : error});

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
            res.send({"status" : "조회실패"});

        } else{
            // 스터디룸 참여 실행
            var user_idx = result[0].useridx
            var sql = 'insert into join_info(room_id, user_idx) values(?,?)';
            connection.query(sql, [room_id, user_idx], function(err, result){
                if(err){
                    console.log(err);
                    res.send({"status" : "어쩔티비"});
                } else{
                    res.send({"status" : "성공"});
                }
            });

        }
    });

});
 
//[수정필요] 스터디룸 나가기 ~ 실행안됨
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
            // join_info delete 수행 ~ 실행안됨
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

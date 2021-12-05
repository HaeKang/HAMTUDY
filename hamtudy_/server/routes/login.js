var express = require('express');
var router = express.Router();
var connection = require("./mysql_con");

router.post('/', function(req,res){
    var id = req.body.user_id;
    var pw = req.body.user_pw;
    
	var sql = 'select user_idx, user_nick from user where user_id = ? and user_pw = ?';
    connection.query(sql, [id,pw], function(error,result){
        if(error){
            console.log(error);
        } else{
            var user_idx = result[0].user_idx;
            var user_nick = result[0].user_nick
            res.send({"user_idx" : user_idx, "user_nick" : user_nick});
        }
    })
});


module.exports = router;

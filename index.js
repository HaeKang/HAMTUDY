// server
const express = require('express')
const app = express()


//---------------------- 서버 실행 ----------------------
app.listen(8080, function(){
    console.log('서버가 8080번 포트에서 실행중 입니다.');
})

/* mysql connection
var connection =  require('./mysql_con.js');
connection.connect();
*/

//
app.get('/', function (req, res) {
    res.send('Hello World')
  })

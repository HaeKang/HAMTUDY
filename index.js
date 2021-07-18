// server
const express = require('express')
const app = express()


//---------------------- 서버 실행 ----------------------
app.listen(3000, function(){
    console.log('서버가 3000번 포트에서 실행중 입니다.');
})

/* mysql connection
var connection =  require('./mysql_con.js');
connection.connect();
*/

//
app.get('/', function (req, res) {
    res.send('Hello World')
  })

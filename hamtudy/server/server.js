const express = require('express');
const app = express();

const port = 8080;

app.listen(port, function(){
    console.log(`서버가 ${port}번 포트에서 실행중 입니다.`);
})

app.get('/', function (req, res) {
    res.send('Hello World');
});

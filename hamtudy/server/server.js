const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());


app.listen(port, function(){
    console.log(`서버가 ${port}번 포트에서 실행중 입니다.`);
});


app.get('/', function(req,res){
	res.send("hello");
});


var testRouter = require('./routes/index.js');
app.use('/test_api', testRouter);
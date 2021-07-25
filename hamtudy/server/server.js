const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./routes/index.js');

app.use(cors());
app.use('/api', api);

const port = 8080;

app.listen(port, function(){
    console.log(`서버가 ${port}번 포트에서 실행중 입니다.`);
});


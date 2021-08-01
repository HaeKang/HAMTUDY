var express = require('express');
var router = express.Router();

router.post('/', function(req,res){
	res.json([{
        'id' : "testing_api",
        'name' : '방가방가햄토리'
    }]);
});

router.post('/test2', function(req,res){
    res.json([
        {'id': "바보", "name" : "햄터터터햄터디"}
    ]);
});

module.exports = router;

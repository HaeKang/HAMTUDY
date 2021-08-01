var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.json([{
        'id' : "testing_api",
        'name' : '방가방가햄토리'
    }]);
});

module.exports = router;

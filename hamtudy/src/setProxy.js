const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api', {
		target : 'http://3.142.49.52:8080/'
	})
    );
};

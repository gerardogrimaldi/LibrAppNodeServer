var express     = require('express');
var http        = require('http');
var path 		= require('path');

//mongoose.connect('mongodb://librapp:pass@server');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.set('views', __dirname + '/views');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// CORS header securiy
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

app.use(app.router);
app.use(function(req, res) {
    res.set('Content-Type', 'text/html'); 
    // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendfile(__dirname + '/public/index.html');
});
var port = process.env.PORT || 8000;
app.listen(port);
console.log('Listening on port 80');
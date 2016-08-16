var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var volleyball = require('volleyball');
var swig = require('swig');
var Promise = require('bluebird');
var db = require('./models/index');
var router = require('./route');

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',router);

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use(express.static('./public'));

app.get('/',function(req, res, next){
	console.log("success!");
});

app.use(function(err, req, res, next){
	console.log("On noes!!!!");
	console.log(err, err.stack);
});

db.sync()
.then(function()
	{
    app.listen(port, function() {
	console.log("Server is listening intently at port " + port + "...");
})
})

	



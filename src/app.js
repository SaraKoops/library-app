//////////////////////////////////////////////////////////////////////
// Server settings
//////////////////////////////////////////////////////////////////////
// var request = require('request') 
var express = require('express');
var bodyParser = require('body-parser');
// var session = require('express-session');
var jade = require('jade');
var sequelize = require('sequelize')
var pg = require('pg');

var app = express(); 

app.set('views', 'src/views');
app.set('view engine', 'jade');

// app.use(session({
// 	secret: 'sparkle sparkle',
// 	resave: true,
// 	saveUninitialized: false
// }));

var Sequelize = require('sequelize');
	var sequelize = new Sequelize("postgres://sara:123@localhost/sara");

// var user = sequelize.define("user", {
// 	username: Sequelize.STRING,
// 	password: Sequelize.STRING,
// 	email: Sequelize.STRING
// });

var book = sequelize.define("book", {
	title: Sequelize.STRING,
	author: Sequelize.STRING,
	owner: Sequelize.STRING,
	lendee: Sequelize.STRING
})

// message.hasMany(comment);
// comment.belongsTo(message);

app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended: true}));

//////////////////////////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////////////////////////

app.get('/', function (request, response){
	response.render('index');
});

app.get('/add', function (request, response){
	response.render('add');
});


sequelize.sync().then(function () { // creating a table, only when you first start the server; promise, after syncing then start the server.

	var server = app.listen(3000, function (){
		console.log('Example app listening on port: ' + server.address().port);

	})
});
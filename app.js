//title       : Server 
//description : Connection Node.js to SQL and API creation
//author      : Ilan Zerdoun
//date        : 2017/05/19
//version     : 0.1

/*-----------*/
/** Modules **/
/*-----------*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

/*------------------*/
/** Connection SQL **/
/*------------------*/

var connection = function() {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'evaluation',
		socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
	});
}

/*-----------------*/
/*** Body-Parser ***/
/* to use req.body */
/*-----------------*/

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

/*------------*/
/** Students **/
/*------------*/

// POST on table students
app.post('/api/students', function(req, res) {
	var q = "INSERT INTO students(firstname,lastname,age,class,gender) VALUES('" + req.body.firstname + "','" + req.body.lastname + "'," + req.body.age + ",'" + req.body.class + "','" + req.body.gender + "')"
	connection().connect();
	connection().query(q, function(error, results, fields) {
		if (error) return console.log(error);
		console.log(results);
	});
	connection().end();
});

// GET on table students
app.get('/api/students', function(req, res) {
	var q = 'SELECT * FROM students';
	connection().connect();
	connection().query(q, function(error, results, fields) {
		if (error) return console.log(error);
		res.send(results);
	});
	connection().end();
});

/*---------*/
/** Marks **/
/*---------*/

// POST on table marks
app.post('/api/marks', function(req, res) {
	var q = "INSERT INTO marks(student,mark) VALUES(" + req.body.student + "," + req.body.mark + ")"
	console.log(q)
	connection().connect();
	connection().query(q, function(error, results, fields) {
		if (error) return console.log(error);
		console.log(results);
	});
	connection().end();
	res.send('bravo');
});

// GET on table marks
app.get('/api/marks', function(req, res) {
	var q = 'SELECT * FROM marks';
	connection().connect();
	connection().query(q, function(error, results, fields) {
		if (error) return console.log(error);
		res.send(results);
	});
	connection().end();
});

/*-------------------------------*/
/** Connection to the port 1337 **/
/*-------------------------------*/

app.listen(1337);
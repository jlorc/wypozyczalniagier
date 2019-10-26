var express = require('express');
var bodyParser = require('body-parser');

var games = require('./routes/games');
var auth = require('./routes/login');
var cors = require('cors');

var port = 3000;
var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', games);
app.use('/login', auth);

app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
})
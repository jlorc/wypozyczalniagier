const express = require('express');
const bodyParser = require('body-parser');

const games = require('./routes/games');
const auth = require('./routes/login');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', games);
app.use('/login', auth);

app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
});
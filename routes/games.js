const express = require('express');
const router = express.Router();
const Game = require('../model/game');

//get all games
router.get('/games', (req, res) => {
	Game.findAll().then(games => {
		res.json(games);
	}).catch(err => {
		res.send(`error: ${err}`);
	})
});

router.post('/game', (req, res) => {
	if (!req.body.name) {
		res.status(400)
		res.json({
			error: "Bad data",
		})
	} else {
		Game.create(req.body).then(() => {
			res.send('Game added');
		}).catch(err => {
			console.log(`Error: ${err}`);
		})
	}
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Game = require('../model/game');

module.exports = router;

router.get('/games', (req, res) => {
	Game.findAll().then(games => {
		res.json(games);
	}).catch(err => {
		res.send(`error: ${err}`);
	})
});

router.post('/game', (req, res) => {
	if (!req.body.game_name) {
		res.status(400);
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

router.put('/game/:id', (req, res) => {
	if (!req.body.is_rented) {
		res.status(400);
		res.json({
			error: "Bad data",
		})
	} else {
		Game.update(
			{is_rented: req.body.is_rented},
			{where: {id: req.params.id}}
		).then(() => {
			res.send('Game updated');
		}).error(err => res.send(err));
	}
});

router.delete('/game/:id', (req, res) => {
	Game.destroy({
		where: {
			id: req.params.id
		}
	}).then(() => {
		res.send("Task deleted!")
	}).catch(err => {
		console.log(`Error ${err}`);
	})
});

module.exports = router;
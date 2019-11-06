const express = require('express');
const router = express.Router();
const Game = require('../model/game');
const Category = require('../model/category');
const RentedGame = require('../model/rentedGame');

module.exports = router;

router.get('/rented', (req, res) => {
	RentedGame.findAll().then(rentedGames => {
		res.json(rentedGames);
	}).catch(err => {
		res.send(`error: ${err}`);
	})
});

router.post('/category', (req, res) => {
	Game.findAll({
		where: {
			category: req.body.category_id,
		}
	}).then(categories => {
		res.json(categories);
	}).catch(err => {
		res.send(`error: ${err}`);
	})
});

router.get('/categories', (req, res) => {
	Category.findAll().then(categories => {
		res.json(categories);
	}).catch(err => {
		res.send(`error: ${err}`);
	})
});

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
	if (!req.body.quantity) {
		res.status(400);
		res.json({
			error: "Bad data",
		})
	} else {
		Game.update(
			{quantity: req.body.quantity},
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
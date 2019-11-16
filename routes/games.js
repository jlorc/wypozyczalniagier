const express = require('express');
const router = express.Router();
const model = require('../database/db');
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

router.post('/rent', (req, res) => {
	if (!req.body.game_name) {
		res.status(400);
		res.json({
			error: "Bad data",
		})
	} else {
		return model.sequelize.transaction((t) => {
			return Game.findOne(
				{
				where: {
					id: req.body.game_id,
				},
				lock: t.LOCK.UPDATE, transaction: t
				}
			).then(game => {
				if (game.quantity === 0) {
					return res.send('Brak gier')
				} else {
					game.quantity -= 1;
					game.save({transaction: t});
				}
			}).then(result => {
				console.log('RESULT', result);
			}).catch(err => {
				return res.send(`Error: ${err}`);
			});
		});
	}
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
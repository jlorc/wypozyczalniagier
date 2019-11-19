const express = require('express');
const router = express.Router();
const model = require('../database/db');
const Game = require('../model/game');
const Category = require('../model/category');
const RentedGame = require('../model/rentedGame');
const QuantityRented = require('../model/quantityRented');

module.exports = router;

router.get('/quantityRented', (req, res) => {
	QuantityRented.findAll().then(quantityRented => {
		res.json(quantityRented);
	}).catch(err => {
		res.send(`error: ${err}`);
	})
});

router.get('/rented', (req, res) => {
	RentedGame.findAll().then(rentedGames => {
		res.json(rentedGames);
	}).catch(err => {
		res.send(`error: ${err}`);
	})
});

router.delete('/rent/:id', (req, res) => {
	RentedGame.destroy({
		where: {
			id: req.params.id
		}
	}).then(() => {
		return Game.findOne({
			where: {
				id: req.body.game_id,
			},
		}).then(game => {
			const modifiedQuantity = game.quantity + 1;
			return game.update({'quantity': modifiedQuantity})
		});
	}).then(() => {
		res.send("Gra została zwócona do magazynu!")
	}).catch(err => {
		res.send({ error: err});
	})
});

router.post('/rent', (req, res) => {
	if (!req.body.game_name) {
		res.status(400);
		res.json({
			error: "Błędne dane!",
		})
	} else {
		return model.sequelize.transaction((t) => {
			return Game.findOne({
				where: {
					id: req.body.game_id,
				},
				transaction: t,
				lock: t.LOCK.UPDATE
			}).then(game => {
				if (game.quantity === 0) {
					return { error: 'Na tą chwilę wszystkie egzemplarze zostały wypożyczone!' }
				} else {
					const modifiedQuantity = game.quantity - 1;
					return game.update({'quantity': modifiedQuantity},{transaction: t})
				}
			}).then(result => {
				if (result.hasOwnProperty('error')) {
					return res.send({error: `${result.error}`});
				}
				return RentedGame.create(req.body).then(() => {
					return res.send('Gra została pomyślnie zarezerwowana!');
				});
			}).catch(err => {
				return t.rollback();
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
		res.send({ error: err});
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
		res.send({ error: err});
	})
});

router.post('/game', (req, res) => {
	if (!req.body.game_name) {
		res.status(400);
		res.json({
			error: "Błędne dane!",
		})
	} else {
		Game.create(req.body).then(() => {
			res.send('Gra została pomyślnie dodana');
		}).catch(err => {
			res.send({ error: err});
		})
	}
});

module.exports = router;
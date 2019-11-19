const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
	"QuantityRented",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		game_name: {
			type: Sequelize.STRING,
		},
		quantity: {
			type: Sequelize.INTEGER,
		},
		rented_counter: {
			type: Sequelize.INTEGER,
		}
	},
	{
		timestamps: false,
		tableName: 'QuantityRented',
	}
);
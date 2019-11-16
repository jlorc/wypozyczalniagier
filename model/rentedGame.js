const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
	"RentedGames",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		game_id: {
			type: Sequelize.INTEGER,
		},
		game_name: {
			type: Sequelize.STRING,
		},
		name: {
			type: Sequelize.STRING,
		},
		surname: {
			type: Sequelize.STRING,
		},
		phone_number: {
			type: Sequelize.STRING,
		},
	},
	{
		timestamps: false,
		tableName: 'RentedGames',
	}
);
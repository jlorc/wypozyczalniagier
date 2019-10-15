const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
	"Games",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		game_name: {
			type: Sequelize.STRING,
		},
		game_description: {
			type: Sequelize.STRING,
		},
	},
	{
		timestamps: false,
	}
)
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
		img_url: {
			type: Sequelize.STRING,
		},
		producer: {
			type: Sequelize.STRING,
		},
		publisher: {
			type: Sequelize.STRING,
		},
		category: {
			type: Sequelize.STRING,
		},
		game_mode: {
			type: Sequelize.STRING,
		},
		release_date: {
			type: Sequelize.STRING,
		},
		rating: {
			type: Sequelize.FLOAT,
		},
		hardware_requirements: {
			type: Sequelize.STRING,
		},
		quantity: {
			type: Sequelize.INTEGER,
		},
	},
	{
		timestamps: false,
		tableName: 'Games',
	}
);
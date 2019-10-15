const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
	"tb_games",
	{
		name: {
			type: Sequelize.STRING,
		},
		price: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		}
	},
	{
		timestamps: false,
	}
)
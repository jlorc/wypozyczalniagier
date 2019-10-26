const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
	"AdminPanel",
	{
		login: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		password: {
			type: Sequelize.STRING,
		},
	},
	{
		timestamps: false,
		tableName: 'AdminPanel',
	}
)
const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
	"Categories",
	{
		category_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		category_name: {
			type: Sequelize.STRING,
		},
	},
	{
		timestamps: false,
		tableName: 'Categories',
	}
);
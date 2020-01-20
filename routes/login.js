const express = require('express');
const router = express.Router();
const Admin = require('../model/admin');

module.exports = router;

router.post('/authenticate', (req, res) => {
	const login = req.body.login;
	const password = req.body.password;

	Admin.findOne(
		{
			where: {
				login: 'admin',
			},
			raw: true,
		}).then(data => {
		const dataLogin = data.login;
		const dataPassword = data.password;

		if ((dataLogin === login) && (dataPassword === password)) {
			res.status(200);
			res.send('OK');
		} else {
			res.status(400).end();
		}
	})
});
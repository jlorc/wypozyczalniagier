const express = require('express');
const router = express.Router();
const Admin = require('../model/admin');

module.exports = router;

router.post('/authenticate', (req, res) => {
	const login = req.body.login;
	const password = req.body.password;

	Admin.findAll({ raw: true }).then(data => {
		const dataLogin = data[0].login;
		const dataPassword = data[0].password;

		if ((dataLogin === login) && (dataPassword === password)) {
			res.status(200);
			res.send('OK');
		} else {
			res.status(400).end();
		}
	})
});
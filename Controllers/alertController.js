require('dotenv').config();
const nodemailer = require('nodemailer');
const alertModel = require('../models/alertModel');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'gmail',
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

module.exports = {
	getAllAlert: async (req, res) => {
		const alert = await alertModel.find();
		res.status(200).json({ alert });
	},
	getAlertById: async (req, res) => {
		const alert = await alertModel.findById(req.params.id);
		res.status(200).json({ alert });
	},
	postAlert: async (req, res) => {
		const alert = await alertModel.create(req.body);
		var mail = req.body.titreAlerte + '@simplon.co';
		console.log(mail);
		var mailOptions = {
			from: process.env.EMAIL,
			to: mail,
			subject: req.body.titreAlerte,
			text: req.body.descriptionAlerte,
		};
		transporter.sendMail(mailOptions, function (error, response) {
			if (error) {
				res.send('Email could not sent due to error: ' + error);
				console.log('Error');
			} else {
				res.status(201).json({ alert });
				console.log('mail sent');
			}
		});
	},
	putAlert: async (req, res) => {
		const alert = await alertModel.findByIdAndUpdate(req.params.id, req.body);
	},
	deleteAlert: async (req, res) => {
		const alert = await alertModel.findByIdAndDelete(req.params.id);
	},
};

// importations des pré-requis
require('dotenv').config();
const nodemailer = require('nodemailer');
const alertModel = require('../models/alertModel');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// création du transporteur
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'gmail',
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

// exportations des fonctions
module.exports = {
	// fonction pour obtenir les alertes
	getAllAlert: async (req, res) => {
		const alert = await alertModel.find();
		res.status(200).json({ alert });
	},
	// fonction pour obtenir une alerte par son id
	getAlertById: async (req, res) => {
		const alert = await alertModel.findById(req.params.id);
		res.status(200).json({ alert });
	},
	// fonction pour créer une alerte
	postAlert: async (req, res) => {
		const alert = await alertModel.create(req.body);
		// variable mail en fonction du type d'alerte
		var mail = req.body.titreAlerte + '@simplon.co';
		console.log(mail);
		var mailOptions = {
			from: process.env.EMAIL,
			to: mail,
			subject: req.body.titreAlerte,
			text: req.body.descriptionAlerte,
		};
		// envoi du mail
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
	// fonction pour modifier une alerte
	putAlert: async (req, res) => {
		const alert = await alertModel.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({ alert });
	},
	// fonction pour supprimer une alerte
	deleteAlert: async (req, res) => {
		const alert = await alertModel.findByIdAndDelete(req.params.id);
		res.status(200).json({ alert });
	},
};

const alertModel = require('../models/alertModel');
const nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.EMAIL_PASSWORD,
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
        console.log(req.body.typeAlerte);
        var mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Sending Email using Node.js',
            text: 'That was easy!',
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

		res.status(201).json({ alert });
	},
	putAlert: async (req, res) => {
		const alert = await alertModel.findByIdAndUpdate(req.params.id, req.body);
	},
	deleteAlert: async (req, res) => {
		const alert = await alertModel.findByIdAndDelete(req.params.id);
	},
};

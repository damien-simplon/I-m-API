// Imports des packages nécessaires et définition des variables
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const connectDB = require("./database");
const routes = require("./Routes/alertRoute");

const start = async () => {
	try {
		await connectDB();
		app.listen(port, function (err) {
			if (err) console.log(err);
			console.log('Server listening on port : ' + port);
		});
	} catch (error) {
		console.log(error);
	}
};

start();

app.use("/api/alert/",routes);
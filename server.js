// Imports des packages nécessaires et définition des variables
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const connectDB = require("./database");
const alertRoutes = require("./Routes/alertRoute");
const userRoutes = require("./Routes/userRoute");
app.use(express.urlencoded({extended: true}));

// fonction de démarrage de la connection à la base de données
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

// lancement de la bdd
start();

// définition des routes

// route pour les alertes
app.use("/api/alert/",alertRoutes);

// route pour les utilisateurs
app.use("/api/user",userRoutes);
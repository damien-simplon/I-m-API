// Imports des packages nécessaires
const mongoose = require("mongoose");

// Récupération de l'uri depuis le fichier .env et connection à la base de données
const connectDB = () => {
    return mongoose.connect(process.env.MONGODB_URI);
}
// Exportation de la connection
module.exports = connectDB;
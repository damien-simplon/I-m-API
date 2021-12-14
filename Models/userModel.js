// importation de mongoose
const mongoose = require('mongoose');

// création du schéma utilisateur
const userSchema = mongoose.Schema({
    // email utilisateur qui est unique et requis
    email: {
        type: String,
        required: [true, "l'email est requis"],
        unique: [true, "cette adresse email existe déjà"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Merci de fournir un email valide',
        ]
    },
    // mot de passe utilisateur qui est requis et de minimum 8 et maximum 32 caractères
    password: {
        type: String,
        required: [true, "le mot de passe est requis"],
        minlength: [8, "le mot de passe doit contenir au moins 8 caractères"],
        maxlength: [32, "le mot de passe doit contenir au plus 32 caractères"],
    },
    // rôle utilisateur qui par défault est égal à "visiteur"
    role : {
        type: String,
        default: 'visiteur'
    }
},{
    timestamps: true
});

// exportation du schéma sous forme de model
module.exports = mongoose.model('User', userSchema);
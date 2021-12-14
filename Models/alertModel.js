// Imports des packages nécessaires
const mongoose = require("mongoose");

// création du schéma alerte
const alertSchema = new mongoose.Schema({
    // titre de l'alerte qui est requis
    titreAlerte:{
        type: String,
        required: [true,"Ce champ est requis"]
    },
    // description de l'alerte qui est requis et entre 10 et 255 caractères
    descriptionAlerte:{
        type: String,
        minlength: [10, "La description doit faire au moins 10 caractères"],
        maxlength: [255, "La description doit faire maximum 255 caractères"],
        required: [true, "Ce champ est requis"]
    },
    // date de l'alerte qui est requis
    dateAlerte:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    // heure de l'alerte qui est requis
    horaireAlerte:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    // lieu de l'alerte qui est requis
    adresseAlerte:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    // photo de l'alerte qui est requis
    photoAlerte:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    // nom de l'utilisateur qui est requis qui fait entre 2 et 20 caractères
    nomUtilisateur:{
        type: String,
        minlength: [2, "Le nom doit faire au moins 2 caractères"],
        maxlength: [20, "Le nom doit faire maximum 20 caractères"],
        required: [true, "Ce champ est requis"]
    },
    // prénom de l'utilisateur qui est requis qui fait entre 2 et 20 caractères
    prenomUtilisateur:{
        type: String,
        minlength: [2, "Le nom doit faire au moins 2 caractères"],
        maxlength: [20, "Le nom doit faire maximum 20 caractères"],
        required: [true, "Ce champ est requis"]
    },
    // adresse de l'utilisateur qui est requis
    adresseUtilisateur:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    // code postal de l'utilisateur qui est requis
    codePostalUtilisateur:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    // ville de l'utilisateur qui est requis
    villeUtilisateur:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    // email de l'utilisateur qui est requis
    emailUtilisateur:{
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Merci de fournir un email valide',
        ],
        required: [true, "Ce champ est requis"]
    },
    // numéro de téléphone de l'utilisateur qui est requis
    telephoneUtilisateur:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
},
{
    timestamps: true
}
);

// exportation du modèle alerte
module.exports = mongoose.model("Alert", alertSchema);
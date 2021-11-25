// Imports des packages nécessaires
const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
    titreAlert:{
        type: String,
        required: [true,"Ce champ est requis"]
    },
    descriptionAlerte:{
        type: String,
        minlength: [10, "La description doit faire au moins 10 caractères"],
        maxlength: [255, "La description doit faire maximum 255 caractères"],
        required: [true, "Ce champ est requis"]
    },
    date:{
        type: Date,
        default: (Date.now).getYear + ":" + (Date.now).getMonth + ":" + (Date.now).getDay,
        required: [true, "Ce champ est requis"]
    },
    horaire:{
        type: Date,
        default: (Date.now).getHours + ":" + (Date.now).getMinutes + ":" + (Date.now).getSeconds,
        required: [true, "Ce champ est requis"]
    },
    adresseAlerte:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    photoAlerte:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    nomUtilisateur:{
        type: String,
        minlength: [2, "Le nom doit faire au moins 2 caractères"],
        maxlength: [20, "Le nom doit faire maximum 20 caractères"],
        required: [true, "Ce champ est requis"]
    },
    prenomUtilisateur:{
        type: String,
        minlength: [2, "Le nom doit faire au moins 2 caractères"],
        maxlength: [20, "Le nom doit faire maximum 20 caractères"],
        required: [true, "Ce champ est requis"]
    },
    adresseUtilisateur:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    codePostalUtilisateur:{
        type: Number,
        required: [true, "Ce champ est requis"]
    },
    villeUtilisateur:{
        type: String,
        required: [true, "Ce champ est requis"]
    },
    emailUtilisateur:{
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Merci de fournir un email valide',
        ],
        required: [true, "Ce champ est requis"]
    },
    telephoneUtilisateur:{
        type: Number,
        required: [true, "Ce champ est requis"]
    },
},
{
    timestamps: true
}
);

module.export = mongoose.model("Alert", alertSchema);
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "l'email est requis"],
        unique: [true, "cette adresse email existe déjà"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Merci de fournir un email valide',
        ]
    },
    password: {
        type: String,
        required: [true, "le mot de passe est requis"],
        minlength: [8, "le mot de passe doit contenir au moins 8 caractères"],
        maxlength: [32, "le mot de passe doit contenir au plus 32 caractères"],
    },
    role : {
        type: String,
        default: 'visiteur'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
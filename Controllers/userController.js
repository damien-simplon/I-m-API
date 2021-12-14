// imports des pré-requis
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

// exportations des fonctions
module.exports = {
    // fonction pour obtenir tout les utilisateurs
    getAllUser: async (req, res) => {
		const user = await userModel.find();
		res.status(200).json({ user });
	},
    // fonction pour obtenir un utilisateur par son id
    getUserById: async (req, res) => {
        const user = await userModel.findById(req.params.id);
        res.status(200).json({ user });
    },
    // fonction pour créer un utilisateur
    postUser: async (req, res) => {
        const { email, password } = req.body;
        //hashage du mot de passe
        password = await bcrypt.hash(req.body.password, 10);
        const user = await userModel.create(email,password);
        res.status(200).json({ user });
    },
    // fonction pour mettre à jour un utilisateur
    putUser: async (req, res) => {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ user });
    },
    // fonction pour supprimer un utilisateur
    deleteUser: async (req, res) => {
        const user = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ user });
    },
    // fonction pour se connecter
    login: async (req, res) => {
        const { email , password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: 'Wrong password' });
        }

        res.status(200).json({ user });
    }
}
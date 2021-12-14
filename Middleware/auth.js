// imports
const bcrypt = require('bcrypt');
const userModel = require('../models/user');

// fonction pour la connection
const auth = (req, res, next) => {
    const email = req.body.email;
    const user = userModel.findOne({ email });

    if (!user) {
        res.status(401).send({
            error: 'User not found'
        });
    }
    else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                req.user = user;
                next();
            }
            else {
                res.status(401).send({
                    error: 'Invalid password'
                });
            }
        });
    }
};

// exportation de l'auth
module.exports = auth;
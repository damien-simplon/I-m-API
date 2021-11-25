const alertModel = require('../models/alertModel');

module.exports = {
    getAllAlert: async (req, res) => {
        const alert = await alertModel.find();
        res.status(200).json({alert});
    },
    getAlertById: async (req, res) => {
        const alert = await alertModel.findById(req.params.id);
        res.status(200).json({alert});
    }
};
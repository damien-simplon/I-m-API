const alertModel = require('../models/alertModel');

module.exports = {
    getAllAlert: async (req, res) => {
        const alert = await alertModel.find();
        res.status(200).json({alert});
    },
    getAlertById: async (req, res) => {
        const alert = await alertModel.findById(req.params.id);
        res.status(200).json({alert});
    },
    postAlert: async (req, res) => {
        const alert = await alertModel.create(req.body);
        res.status(201).json({alert});
    },
    putAlert: async (req, res) => {
        const alert = await alertModel.findByIdAndUpdate(req.params.id, req.body);
    },
    deleteAlert: async (req, res) => {
        const alert = await alertModel.findByIdAndDelete(req.params.id);
    }
};
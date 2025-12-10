const Prospect = require('../models/Prospect');

// Register a new donor
const createProspect = async (req, res) => {

    try {
        const newProspect = Prospect(req.body);
        const prospect = await newProspect.save();
        res.status(201).json(prospect);
    }catch (err) {
        res.status(500).json(err);
    }
};

// Get all donors
const getAllProspects = async (req, res) => {
    try {
        const ProspectS = await Prospect.find();
        res.status(200).json(ProspectS);
    } catch (err) {
        res.status(500).json(err);
    }
};
// Get a donor by ID
const getOneProspet = async (req, res) => {
    try {
        const prospect= await Prospect.findById(req.params.id);
        if (!prospect) {
            return res.status(404).json("Prospect not found");
        }
        res.status(200).json(prospect);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update donor informa
const updatedProspect = async (req, res) => {
    try {
        const updatedProspect = await Prospect .findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProspect);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete a donor
const deleteProspect= async (req, res) => {
    try {
        await Prospect.findByIdAndDelete(req.params.id);
        res.status(200).json("Donor has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
};
module.exports = exports;
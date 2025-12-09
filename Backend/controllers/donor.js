const Donor = require('../models/Donor');

// Register a new donor
exports.registerDonor = async (req, res) => {
    const newDonor = new Donor({
        name: req.body.name,
        bloodGroup: req.body.bloodGroup,
        age: req.body.age,
        lastDonationDate: req.body.lastDonationDate,
        contactInfo: req.body.contactInfo,
        diseases: req.body.diseases,
        bloodpressure: req.body.bloodpressure,
    });
    try {
        const savedDonor = await newDonor.save();
        res.status(201).json(savedDonor);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

// Get all donors
exports.getAllDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.status(200).json(donors);
    } catch (err) {
        res.status(500).json(err);
    }
};
// Get a donor by ID
exports.getDonorById = async (req, res) => {
    try {
        const donor = await Donor.findById(req.params.id);
        if (!donor) {
            return res.status(404).json("Donor not found");
        }
        res.status(200).json(donor);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update donor information
exports.updateDonor = async (req, res) => {
    try {
        const updatedDonor = await Donor.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedDonor);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete a donor
exports.deleteDonor = async (req, res) => {
    try {
        await Donor.findByIdAndDelete(req.params.id);
        res.status(200).json("Donor has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
};
module.exports = exports;
const mongoose = require('mongoose');
const DonorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 65,
    },
    lastDonationDate: {
        type: Date,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    diseases: {
        type: [String],
        default: [],
    },
    bloodpressure: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['eligible', 'ineligible'],
        default: 'eligible',
    },
},
{
    timestamps: true,
});
module.exports = mongoose.model('Donor', DonorSchema);
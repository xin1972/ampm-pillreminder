const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    name: {
        type: String,
        required: 'Name is required'
    },
    phone: {
        type: String,
        required: 'Phone is required'

    },
    street: {
        type: String,
        required: 'Street is required'

    },
    city: {
        type: String,
        required: 'City is required'

    },
    state: {
        type: String,
        required: 'State is required'

    },
    zip: {
        type: String,
        required: 'Zip is required'
    },

    reminders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Reminder"
        }
    ]
});

const Patient = mongoose.model('Patient',patientSchema);
module.exports = Patient;
const mongoose = require('mongoose')
const Schema = monggose.Schema

const RemindersSchema = new Schema({
    reminderTitle: {
        type: moongose.schema.Types.ObjectId,
        ref: 'Patient',
        maxlenght: 300
    },
    dayToTake: {
        type: String
    },
    timeTotake: {
        type: String
    },
    typeOfMedication: {
        type: String
    },
    medicationDosage: {
        type: String
    },
    medicationRefillDate: {
        type: String
    },
    reminderMessage: {
        type: String
    },
    reminderImage: {
        type: String
    },
    receiveResponseBy: {
        type: String
    },
    responseReceived: {
        type: Boolean
    },
    responseLater: {
        type: Boolean,
        default: false
    },

});

const Reminders = mongoose.model('Reminders', RemindersSchema);
module.exports = Reminders;
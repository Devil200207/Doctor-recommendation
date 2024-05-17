const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://chinmay:chinmay@cluster0.dwpy7.mongodb.net/assignment")

const DoctorSchenma = mongoose.Schema({
    city: {
        type: String,
        required:true,
    },
    speciality : {
        type: String,
        required:true,
    }
})

const PatientSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    phone: {
        type: String,
        required:true,
    },
    city: {
        type: String,
        required:true,
    },
    symptom : {
        type: String,
        required:true,
    }
})

const doctor = mongoose.model('Doctor', DoctorSchenma);
const patient = mongoose.model('patient', PatientSchema);
module.exports = {
    doctor,
    patient
}
const express = require("express")
const app = express()
const cors = require("cors");
const { patient, doctor } = require('./db');
const { addPatient,adddoctor } = require('./types');



app.use(express.json());
app.use(cors());


app.post('/addDoctor', async (req, res) => {
    const doctorBody = req.body;
    const doctorPayload = adddoctor.safeParse(doctorBody);

    if (doctorPayload.success)
    {
        await doctor.create({
            city: req.body.city,
            speciality: req.body.speciality
        })
    
        res.status(201).json({
            msg: "doctor created successfuly"
        });
    }
    else {
        res.status(400).send("Invalid add doctor data");
        return;
    }
   
})

app.post('/addPatient', async (req, res) => {
    const patientBody = req.body;
    const patientpayload = addPatient.safeParse(patientBody);

    if (patientpayload.success) {
        await patient.create(patientBody);
        res.status(201).json({
            msg: "Patient created successfuly"
        });
    }
    else {
        res.status(400).send("Invalid add patient data");
        return;
    }

})

app.get('/refer', async (req, res) => {

    const { city, symptoms } = req.query;

    const specialties = {
        'Arthritis': 'Orthopedic',
        'Back Pain': 'Orthopedic',
        'Tissue injuries': 'Orthopedic',
        'Dysmenorrhea': 'Gynecology',
        'Skin infection': 'Dermatology',
        'Skin burn': 'Dermatology',
        'Ear pain': 'ENT'
    };

    const specialty = specialties[symptoms];
    const citiesToExpand = ['Delhi', 'Noida', 'Faridabad'];

    if (!citiesToExpand.includes(city)) {
        res.status(400).json({
            msg: "We are still waiting to expand to your location"
        });
        return;
    }

    try 
    {
        const doctors = await doctor.find({ city, speciality: specialty });
        if (doctors.length === 0) 
        {
            res.status(400).json({
                msg: "We are still waiting to expand to your location"
            });    
        }
        else
        {
            res.status(200).json({
                doctors
            });
        }
    } 
    catch (error) {
        res.status(400).send(`Error referring patient to ${specialty} department:`);
        return;
    }

})



app.listen(3000);
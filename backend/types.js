const zod = require("zod");

const patient  = zod.object({
    name: zod.string().min(3),
    email:zod.string().email(),
    phone: zod.string().length(10),
    city: zod.string().max(20),
    symptom: zod.string(),
});

const citySchema = zod.enum(['Delhi', 'Noida', 'Faridabad']);
const specialitySchema = zod.enum(['Orthopedic', 'Gynecology', 'Dermatology', 'ENT specialist']);

const doctor = zod.object({
    city: citySchema,
    speciality: specialitySchema,
})

module.exports = {
    addPatient:patient,
    adddoctor:doctor
}
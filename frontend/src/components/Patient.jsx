import './pp.css'
import { useState } from 'react';
import { DoctorRefer } from './DoctorRefer';

export default function Patient() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [symptom, setsymptom] = useState("");
    const [city, setcity] = useState("");
    const [doctor, setdoctor] = useState([]);

    return (
        <div>
            <div class="login-box">
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" onChange={function (e) {
                            const value = e.target.value;
                            setname(value);
                        }} />
                        <label>Name</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="" required="" onChange={function (e) {
                            const value = e.target.value;
                            setemail(value);
                        }} />
                        <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="" required="" onChange={function (e) {
                            const value = e.target.value;
                            setphone(value);
                        }} />
                        <label>phone No.</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="" required="" onChange={function (e) {
                            const value = e.target.value;
                            setcity(value);
                        }} />
                        <label>City</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="" required="" onChange={function (e) {
                            const value = e.target.value;
                            setsymptom(value);
                        }} />
                        <label>Speciality</label>
                    </div><center>
                        <a href="#" onClick={() => {
                            fetch("http://localhost:3000/addPatient", {
                                method: "POST",
                                body: JSON.stringify(
                                    {
                                        name: name,
                                        email: email,
                                        phone: phone,
                                        city: city,
                                        symptom: symptom
                                    }),
                                headers:
                                {
                                    "Content-Type": "application/json"
                                }
                            }).then(async (res) => {
                                const json = await res.json();
                                alert("Patient added");
                            })
                            fetch("http://localhost:3000/refer?city=" + city + "&symptoms=" + symptom, {
                                method: "GET",
                            })
                                .then(async (res) => {
                                    const json = await res.json();
                                    setdoctor(json.doctors);
                                });
                        }}>
                            SEND
                            <span></span>
                        </a></center>
                </form>
            </div>
            <div class="refer">
                <DoctorRefer doctor={doctor}></DoctorRefer>
            </div>
        </div>
    )
}
import './dd.css'
import {useState} from 'react';
export default function Doctor()
{

    const [city, setcity] = useState("");
    const [speciality, setspeciality] = useState("");

    return(
        <div>
           <div class="login-box">
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" onChange={function(e){
                        const value = e.target.value;
                        setcity(value);
                    }}/>
                        <label>City</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="" required="" onChange={function(e){
                        const value = e.target.value;
                        setspeciality(value);
                    }}/>
                        <label>Speciality</label>
                    </div><center>
                    <a href="#" onClick={() => {
                    fetch("http://localhost:3000/addDoctor", {
                        method:"POST",
                        body:JSON.stringify(
                        {
                            city:city,
                            speciality:speciality
                        }),
                        headers:
                        {
                            "Content-Type":"application/json"
                        }
                    }).then(async (res) => {
                        const json = await res.json();
                        console.log(json);
                        alert("Doctor added");
                    })
                }}>
                            SEND
                        <span></span>
                    </a></center>
                </form>
            </div>
        </div>
    )
}
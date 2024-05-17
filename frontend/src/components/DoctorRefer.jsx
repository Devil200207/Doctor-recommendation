export function DoctorRefer({doctor})
{
    return  <div class="outer_Todo">
    <h1>Doctor you can consult:</h1>
        {doctor.map((todo) =>{
            return <div>
                <div>
                    <p>Doctor's city: {todo.city}</p>
                </div>
                <div>
                    <p>Doctor's Speciality: {todo.speciality}</p>
                </div>
            </div>
        })}
        
    </div>
}
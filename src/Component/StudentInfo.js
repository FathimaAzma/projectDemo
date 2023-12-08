import { useState } from "react";

export default function StudentInfo(){
    const[student,setStudent]=useState({
        name:"",
        regno:"",
        age:"",
        gender:"",
        error:""
       
    });

    function handleChange(e){
        setStudent({...student,[e.target.name]:e.target.value});
    }

    function checkAge(){
        if(student.age<18){
            setStudent({...student,error:"Age should be more than 18"});
        }
       
    }

    return(
        <>
            <h2>Student Info</h2>
            <table border="0">
                <tbody>
                    <tr>
                        <td align="right">Name</td>
                        <td><input name="name" type="text" value={student.name} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td align="right">RegNo</td>
                        <td><input name="regno" type="text" value={student.regno} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td align="right">Age</td>
                        <td><input name="age" type="number" value={student.age} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td align="right">Gender</td>
                        <td>
                            <input name="gender" type="radio" value="male" onChange={handleChange}/>Male
                            <input name="gender" type="radio" value="female" onChange={handleChange}/>Female
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Check" onClick={checkAge}/></td>
                    </tr>
                </tbody>
            </table>
            <ol>
                <li>{student.name}</li>
                <li>{student.regno}</li>
                <li>{student.age}</li>
                <li>{student.gender}</li>
            </ol>
            <p>{student.error}</p>
        </>
    );
}
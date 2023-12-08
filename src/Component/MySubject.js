import { useState } from "react";
export default function MySubject(){
    const [myLan,setLang]=useState(null);
    return(
        <div>
            <h2>My favourite Programming language is {myLan}</h2>
            <select onChange={e=>(setLang(e.target.value))}>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
                <option value="JavaScript">JavaScript</option>
                <option value="C sharp">C sharp</option>
                <option value="Python">Python</option>
            </select>
        </div>
    )
}
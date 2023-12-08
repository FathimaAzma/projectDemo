import { useState } from "react";

export default function UserName(){
    const [yourName,setName]=useState("Give your name");
    
    function handleTextChange(e){
        setName(e.target.value);
    }

    function resetName(){
        setName('');
    }

    return(
        <table border="0">
            <tr>
                <td align="right">Name</td>
                <td><input type="text" value={yourName} onChange={handleTextChange}/></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="Reset" onClick={resetName}/></td>
            </tr>
            <tr>
                <td colSpan="2">Your name is:{yourName}</td>
            </tr>
        </table>
    );
}
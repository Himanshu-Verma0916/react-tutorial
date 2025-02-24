import { useEffect, useState } from "react";

// as App.js
function ApiPostMethods() {
    const[phone,setPhone]=useState("")
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")

     async function saveData(){
        // console.warn(id,name,email)
        let data={phone,name,email}
        const result= await fetch('https://jsonplaceholder.typicode.com/users',{
            method:'POST',
            headers: { 
                "Content-Type": "application/json" 
            },

            body:JSON.stringify(data)
        }
        )

        const final=await result.json();

        console.warn(final);

    }

   
    return (
        <div style={{ textAlign: "center" }}>
            <h1>This is Api Method </h1>
            <br/>
            <bt/>
            <input type="number" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/> <br/>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} /> <br/>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/><br/>
            <button onClick={saveData}>Send Data</button>
        </div>
    )
}
export default ApiPostMethods;
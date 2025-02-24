import React,{useState} from 'react';

function Form(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[country,setCountry]=useState("India");

    const getFormData=(e)=>{
        e.preventDefault();
        console.log(name,email,country);
    }
    return(
        <div>
            <form onSubmit={getFormData}>
                <h1>Form</h1>
                <input type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <select onChange={(e)=>{setCountry(e.target.value)}}>
                    <option>Aus</option>
                    <option>India</option>
                    <option>SA</option>
                    <option>USA</option>
                    <option>UK</option>
                </select>
                <input type='checkbox' onChange={(e)=>{setCountry(e.target.checked)}} required /> accept terms and conditions

                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}
export default Form;
//form validation
import React,{useState} from 'react';
function Login() {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[nameErr,setNameErr]=useState(true);
    const[passwordErr,setPasswordErr]=useState(true);

    const loginHandler=(e)=>{
        e.preventDefault();
        if(nameErr && passwordErr){
            console.log("Name:",name);
            console.log("Password:",password);
        }
        else{
            console.log("Validation Error");
        
        }
    }

    const nameHandler=(e)=>{
        let val=e.target.value;
        {val.length<3?setNameErr(false):setNameErr(true)}
        setName(val);
    }
    const passwordHandler=(e)=>{
        let val=e.target.value;
        {val.length<3?setPasswordErr(false):setPasswordErr(true)}
        setPassword(val);
    }
    return(
        <div>
            <h1>Login Form Validation</h1>
            <form onSubmit={loginHandler}>
            <input type="text" placeholder="Enter your name" onChange={nameHandler}/>
            {!nameErr?<span style={{color:'red'}}>Name Error</span>:null}
            <br/>
            <input type="password" placeholder="Enter your password" onChange={passwordHandler}/>
            {!passwordErr?<span style={{color:'red'}}>Password Error</span>:null}
            <br/>
            <button type='submit'>Submit</button> 
            </form>           
        </div>
    )

}
export default Login;
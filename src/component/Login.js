import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
function Login(){
    const navigate=useNavigate()
    const login=()=>{
        localStorage.setItem("loginData",true)
        navigate('/')
    }
    useEffect(()=>{
        let login=localStorage.getItem("loginData");
        if(login){
            navigate('/')
        }
    })
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{textAlign:"center"}}>Login Page</h1>
            <input type='text'></input>
            <input type='text'></input>
            <button onClick={login} style={{textAlign:"center"}}>Login</button>

        </div>
    )
}
export default Login;
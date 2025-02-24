import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Accessing component as props from Routing
function Protected(props){
    const navigate=useNavigate();
    const {Component}=props
    useEffect(()=>{
        let login=localStorage.getItem('loginData');
        if(!login){
            navigate('/login')
        }

    })
    return (
        <div>
            <Component/>
        </div>
    )
}
export default Protected;
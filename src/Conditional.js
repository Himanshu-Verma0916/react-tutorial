import React,{useState} from 'react';

export default function Conditional(){
    // const[isLoggedIn,setIsLoggedIn]=useState(true);
    const[isLoggedIn,setIsLoggedIn]=useState(2);
    return (
        <div>
            {/* {isLoggedIn ? <h1>Welcome Joginder</h1> : <h1>Welcome Guest</h1>} */}
            {isLoggedIn===1 ? <h1>Welcome Joginder</h1> :isLoggedIn==2? <h1>Welcome Guest</h1>:isLoggedIn==3?<h1>Welcome Admin</h1>:<h1>Invalid User</h1>}
        </div>
    )
}

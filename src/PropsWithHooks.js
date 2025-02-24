import React,{useEffect } from "react";

function PropsWithHooks(props){
    useEffect(()=>{
            console.log("useEffect called"+props.name);
            document.title = `${props.name} clicked  for update name`;

        },[props.name])
    return(
        <div>
            <h1>hello {props.name} bhai</h1>
        </div>
    )
}
export default PropsWithHooks;
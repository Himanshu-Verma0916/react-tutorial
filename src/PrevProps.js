import React,{useEffect, useRef} from 'react'
export default function PrevProps(props){
    let lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count
    })
    let prevCount=lastVal.current;
    return(
        <div>
            <h1>Current Value:{props.count}</h1>
            <h2>Previous Value:{prevCount}</h2>
        </div>
    )
}
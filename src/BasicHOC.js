import React,{useState} from 'react';
function BasicHOC(){
    return(
        <div>
            <h1>Basic HIGHER ORDER COMPONENT(HOC)</h1>
            <HOCGreen cmp={Counter}/>   {/* cmp means Component */}
            <HOCBlue cmp={Counter}/>   {/* cmp means Component */}
            <HOCPink cmp={Counter}/>   {/* cmp means Component */}
        </div>
    )
}

function Counter(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
        </div>
    )
}

function HOCGreen(props){
    return(
        <h1 style={{color:"#ffffff" ,backgroundColor:"green",width:"14rem"}}>Green<props.cmp/></h1>
    )
}
function HOCBlue(props){
    return(
        <h1 style={{color:"#ffffff" ,backgroundColor:"blue",width:"14rem"}}>Blue<props.cmp/></h1>
    )
}
function HOCPink(props){
    return(
        <h1 style={{color:"#ffffff" ,backgroundColor:"pink",width:"14rem"}}>Pink<props.cmp/></h1>
    )
}
export default BasicHOC;
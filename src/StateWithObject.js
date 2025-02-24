import React,{useEffect, useRef, useState} from 'react'
export default function StateWithObject(){
    const[data,setData]=useState({name:"Rohit",age:21})
    return(
        <div style={{textAlign:"center"}}>
            <h1>StateWithObject</h1>
            {/* <input type='text' value={data.name}  onChange={(e)=>setData({name:e.target.value})}/>
            <br/>
            <input type='number' value={data.age}  onChange={(e)=>setData({age:e.target.value})}/> */}

            {/* way 1 to resolving loading problem */}
            {/* <input type='text' value={data.name}  onChange={(e)=>setData({name:e.target.value,age:data.age})}/>
            <br/>
            <input type='number' value={data.age}  onChange={(e)=>setData({age:e.target.value,name:data.name})}/> */}
            
            {/* way2 for reloading problem */}
            <input type='text' value={data.name}  onChange={(e)=>setData({...data,name:e.target.value})}/>
            <br/>
            <input type='number' value={data.age}  onChange={(e)=>setData({...data,age:e.target.value})}/>
            <br/>
            <br/>
            <h1>Name:{data.name}</h1>
            <h1>age:{data.age}</h1>
        </div>
    )
}
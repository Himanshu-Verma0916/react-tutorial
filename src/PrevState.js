import React, { useState } from 'react'
import PrevProps from './PrevProps';
export default function PrevState() {
    const [count, setCount] = useState(1);

    const updateCounter = () => {
        // let randVal=Math.floor(Math.random()*10)
        // setCount((prev)=>{
        //     console.warn(prev)
        //     if(prev<5){
        //         alert("prev val is very low")
        //     }
        //     return randVal;
        // })

        for (let val = 0; val < 5; val++) {
            setCount((prev) => {
                return prev + 1
            })
        }
    }
    return (
        <div>
            <h1> Accessing Previous state {count}</h1>
            <button onClick={() => updateCounter()}>Update Counter</button>
            <br />
            <br />
            <PrevProps count={count} />
            <button onClick={() => setCount(Math.floor(Math.random() * 10))}>Update Counter</button>

        </div>
    )
}
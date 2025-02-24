import React from 'react'
import { CommonContext } from './CommonContext'
export default function Footer(){
    return(
        <CommonContext.Consumer>
            {
                //  /*  color as parameter denge because Apps.js me color state define hai */
                ({color})=>(  
                    <h1 style={{backgroundColor:color}}>hello, This is Footer page</h1>

                )
            }
        </CommonContext.Consumer>
    )
}
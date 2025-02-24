import React from 'react'
import { CommonContext } from './CommonContext'
export default function Header(){
    return(
        <CommonContext.Consumer>
            {
                //  /*  color as parameter denge because Apps.js me color state define hai */
                ({color})=>(  
                    <h1 style={{backgroundColor:color}}> Header page</h1>

                )
            }
        </CommonContext.Consumer>
    )
}
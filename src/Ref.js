// as App.js
import './App.css'
//ref with class component
//  import React,{createRef,PureComponent} from 'react';
//  class Ref extends PureComponent{
//     constructor(){
//         super();
//         this.inputRef = createRef();
//     }

//     componentDidMount(){
//         this.inputRef.current.value="10o09345";
//         this.inputRef.current.focus();
//     }
//     getVal()
//     {
//         console.warn(this.inputRef.current.value);
//         console.warn(this.inputRef)
//         this.inputRef.current.style.color="red";
//         this.inputRef.current.style.background="yellow";
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Ref with Class Component</h1>
//                 <input type="text" ref={this.inputRef} />

//                 <button onClick={()=>{this.getVal()}} >Click Here</button>
//             </div>
//         )
//     }
//  }
//  export default Ref;

//useRef with functional component

import React, { useRef,useState } from 'react';
import ChildComp from './ForwardRef';
function Ref() {
    const[count,setCount]=useState(0);

    const inputRef = useRef();
    const inputDataRef = useRef();  // for forwardRef

    //uncontrolled component
    let inputRef1=useRef(null);
    let inputRef2=useRef(null);

    function getVal() {
        console.warn(inputRef.current.value);
        console.warn(inputRef)
        inputRef.current.style.color = "red";
        inputRef.current.style.background = "yellow";
        // inputRef.current.style.display = "none";
    }

    function forwarRefFun() {
        inputDataRef.current.focus();
        inputDataRef.current.value="hdkjhskj";
        inputDataRef.current.style.color = "red";
    }

    function SubmitForm(e){
        e.preventDefault();
        console.warn(inputRef1.current.value);
        console.warn(inputRef2.current.value);
        let input3Val=document.querySelector('.input3').value;
        console.warn(input3Val);
        
    }


    return (
        <div>
            <h1>UseRef with functional Component</h1>
            <input type="text" ref={inputRef} />
            <button onClick={()=>getVal()} >Click Here</button>

            {/* forwardRef */}

            <h1>ForwardRef to child component</h1>
            <ChildComp ref={inputDataRef} />
            <button onClick={forwarRefFun}>Focus Input</button>

            <br/>
            <br/>
            <br/>
            {/* Controlled Component */}
            <h1>Controlled Component</h1>
            <input value={count} onChange={(e)=>setCount(e.target.value)}/>
            <h3>{count}</h3><br/><br/>

            {/* Uncontrolled Component */}
            <h1>Uncontrolled Component</h1>
            <form onSubmit={SubmitForm}>
            <input  type='text' ref={inputRef1}/> <br/><br/>
            <input  type='text'ref={inputRef2}/><br/><br/>
            <input  type='text'className="input3" /><br/><br/>
            <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Ref;


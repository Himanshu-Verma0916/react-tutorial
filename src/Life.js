// as App.js
import React, { useState } from "react";
import RenderLifeCycle from "./RenderLifeCycle";
import Support from "./Support";
// function Life() {
//     // const[name,setName]=useState("Joginder");
//     return (
//         <div>
//             <h1>Life Cycle</h1>
//             {/* <RenderLifeCycle  name={name} /> */}
//             <RenderLifeCycle/>
//             {/* <button onClick={()=>{setName("Jaggi")}}>Update Name</button> */}
//         </div>
//     )
// }

//component did update

class Life extends React.Component {
    constructor() {
        super();
        console.log("constructor called");
        this.state = {
            count: 0,
            show:true
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called. Previous state:", prevState,this.state.count);
        // if(this.state.count===prevState.count){
        // //     alert("same count");
        // // }
        // if(prevState.count<5){
        //     this.setState({count:this.state.count+1});
        // }
        
        
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called",this.state.count);
        if(this.state.count<10){
            return true;
        }
        else{
            return false;
        }
        
    }
    
    // render(){
    //     console.log("render method called due to state change",this.state);
    //     return(
    //         <div>
    //             <h1> Render Life Cycle {this.state.count} </h1>
    //             <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Counter</button>

    //             <br></br>
    //             <br></br>
    //             <br></br>
    //         </div>
    //     )
    // }

    render(){
        return(
            <div>
                <h1>Life Cycle</h1>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Counter</button>
                <br/>
                <br/>
                
                {this.state.show?<Support/>:null}
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Support</button>
            </div>
        )
    }
}
export default Life;
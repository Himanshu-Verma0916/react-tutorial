import React,{Component} from "react";

// class RenderLifeCycle extends Component{
//     render(){
//         console.log("render method called due to props change",this.props);
//         return(
//             <div>
//                 <h1> Render Life Cycle</h1>
//                 <h4>hello {this.props.name}</h4>
//             </div>
//         )
//     }
// }

class RenderLifeCycle extends Component{
    constructor(){
        console.log("constructor called");
        super();
        this.state={
            name:"Joginder",
            email:"hi@gmail.com"
        }
    }

    componentDidMount=()=>{
        console.log("conponent did mount called",this.state);
    }
    render(){
        console.log("render method called due to props change",this.state);
        return(
            <div>
                <h1> Render Life Cycle  </h1>
                <h4 onDoubleClick={()=>{this.setState({name:"Kabutarava",email:"kabutar@gmail.com"})}}>hello {this.state.name}</h4>
            </div>
        )
    }
}


//by changing in state

export default RenderLifeCycle;



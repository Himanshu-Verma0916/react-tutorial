import './App.css';
// import Users,{Officer} from './Users';
// import Employee from './ReactWithoutJSX';
import React,{useState} from 'react';
import Login from './Login';
import Student from './Student';

import User1 from './User1';
import User2 from './User2';
function App() {
  const [data,setData]=useState(1);
  const [name,setName]=useState("Joginder");
  function hello(){
    setData(data+1);
  }
  
  
  console.log("______")

  function functionAsProps(){
    alert("Function as props send to child component");
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={hello}>Click Here</button>
      {/* <Users/>
      <Employee/>
      <Officer/> */}
      
      <h1>Props in React</h1>
      <Student name="Rohit" rollNo={101} others={{ Address: "Delhi", pin: 219 }} />
     <Student name={name} rollNo={11} others={{ Address: "Top", pin: 719 }} />
     <button onClick={()=>{setName("Jaggi")}}>Update Name</button>
     <br/>
     <br/>
     <Login/>
     <br/>
     <br/>
     <User1 data={functionAsProps}/>
     <User2 data={functionAsProps}/>
     

      {/*pass function as props to child component User1 and User2.js  */}

      
    </div>
  );
}


// //props with  class component
// import Conditional from './Conditional';
// import React,{Component} from 'react';
// import Student from './Student';

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"Joginder",
//             rollNo:101,
//             others:{Address:"Delhi",pin:219}
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Props in React</h1>
//                 <Student name={this.state.name} rollNo={this.state.rollNo} others={this.state.others} />
//                 <h2>Hii jhjvsdjc</h2>
//                 <Student name={this.state.name="Rohit"} rollNo={this.state.rollNo=44} others={this.state.others} />
//                 <button onClick={()=>{this.setState({name:"Jaggi"})}}>Update Name</button>
//                 <Conditional/>
//             </div>
//         )
//     }
// }

// //state in class component
// import React,{Component} from 'react';

// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             data:1
//         }
//     }
//     hello=()=>{
//         this.setState({data:this.state.data+1});
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.data}</h1>
//                 <button onClick={this.hello}>Click Here</button>
//             </div>
//         )
//     }
// } 


export default App;

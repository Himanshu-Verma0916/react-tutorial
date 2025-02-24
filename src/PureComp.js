// as App.js
// Pure Component is defined for only class component .In fn component we use React.memo(my_Compo) for this
//  import React,{PureComponent} from 'react';
//  class PureComp extends PureComponent{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         };
//     }
//     render(){
//         console.warn("rerendering ");
//         return(
//             <div>
//                 <h1>Pure Component{this.state.count}</h1>
//                 <button onClick={()=>{this.setState({count:1})}}>Click Here</button>
//             </div>
//         )
//     }
//  }

//// WAY 1 for memo hook

// import React,{useState} from 'react';
// function PureComp(){
//     const[count,setCount]=useState(0);
//     console.log("Rendering MyComponent");
//     return(
//         <div>
//             <h1>Pure Component{count}</h1>
//             <button onClick={()=>{setCount(1)}}>Click Here</button>
//         </div>
//     )
// }
//  export default React.memo(PureComp);


/// WAY 2 for memo hook
import React,{useState,useMemo} from 'react';
function PureComp(){
    const[count,setCount]=useState(0);
    const[item,setItem]=useState(13);
    const multiCountMemo = useMemo(function multiCount() {
        console.warn("multiCount");
        return count * 10;
    },[count]);
    return(
        <div>
            <h1>Pure Component{count}</h1>
            <h1>item:{item}</h1>
            <button onClick={()=>{setCount(count+1)}}>Count Here</button>
            <button onClick={()=>{setItem(item*3)}}>Itemount Here</button>
            <h1>{multiCountMemo}</h1>
        </div>
    )
}
 export default PureComp;

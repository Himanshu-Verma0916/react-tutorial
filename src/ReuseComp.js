//As App.js
import './App.css';
import Reuse from './Reuse';
import LiftingUpState from './LiftingUpState';

function ReuseComp(){
    const EmpData = [
        { name: "Joginder", age: 25 },
        {  name: "Ram", age: 26 },
        {  name: "Shyam", age: 27 },
        { name: "Ravi", age: 28 },
    ];
    function parentAlert(data){
        alert(data);
    }
    return(
        <div style={{textAlign:"center"}}> 
        {/* <>                    */}
            <h1>Hello Reusable Component</h1>
            {
                // EmpData.map((data)=>(
                //    <Reuse info={data}/>
                //    <button onClick={()=>alert({data.name})}> ClickHere</button>
                // ))
                EmpData.map((data)=>(
                <div key={data.name}>
                       <Reuse info={data}/>
                       <button onClick={()=>alert(data.name)}> ClickHere</button>
                </div>
                ))
            }
            <LiftingUpState alert={parentAlert}/>
        </div>
        
        // </>
    )
}
export default ReuseComp;

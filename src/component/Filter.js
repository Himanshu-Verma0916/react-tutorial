import {useSearchParams} from 'react-router-dom';
function Filter(){
    const[searchParams,setSearchParams]=useSearchParams();
    console.warn(searchParams.get('age'));
    let age=searchParams.get('age');
    let name=searchParams.get('name');
    return (
        <div>
            <h1>Filter Page</h1>
            <p>This is Filter page jhjshfdkjxshbhhzcmnz </p>
            <h3>Name:{name}</h3>
            <h3>Age:{age}</h3>
            <input type='text' placeholder='change data' onChange={()=>{setSearchParams({text:"jjfnjsnd",age:33})}}/>

            <button onClick={()=>{setSearchParams({age:49, name:"Verma"})}}>Change Age</button>
            
        </div>
    )
}
export default Filter;
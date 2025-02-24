//get input box value
import React, { useState } from 'react';
function App1() {
    const [data, setData] = useState(null);
    const [result, setResult] = useState(false);
    const [option, setOption] = useState(false);
    const [status, setStatus] = useState(false);

    const getData = (e) => {
        console.log(e.target.value);
        setData(e.target.value);
    }
    const getResult = () => {
        if (result) {
            setResult(false);
        }
        setResult(true);

    }
    const getOption = (e) => {
        console.log(e.target.value);
        setOption(e.target.value);
    }
    return (
        <div className="App">
            <center>
                {result ? <h1>{data}</h1> : null}

                <input type="text" onChange={getData}></input>
                <button onClick={getResult}>Get Input Data</button>
                <br />
                <textarea onChange={getData}></textarea>

                <br/>
                <select onChange={getOption}>
                    <option>Azamgarh</option>
                    <option>Delhi</option>
                    <option>Mau</option>
                    <option>Indore</option>
                </select>
                <p>{option}</p>
                <br />
                <br />
                <br />

                {/* toggle button */}
                {status ?<h1>Hide/Show Toggle </h1>:null}
                {/* <button onClick={()=>setStatus(true)}>Show</button>
                <button onClick={()=>setStatus(false)}>Hide</button> */}

                <button onClick={()=>setStatus(!status)}>{status?'Hide':'Show'}</button>
            </center>

        </div>
    )
}

export default App1;
//as App.js
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function NestedList() {
    const [id, setId] = useState(0);
    const EmpData = [
        { name: "Joginder", age: 25, address: [{ city: "Delhi", state: "Delhi",HouseNo:4 }, { city: "Noida", state: "UP" ,HouseNo:5}] },
        { name: "Ram", age: 26, address: [{ city: "Delhi", state: "Delhi",HouseNo:11 }, { city: "Noida", state: "UP",HouseNo:8 }] },
        { name: "Shyam", age: 27, address: [{ city: "Delhi", state: "Delhi" ,HouseNo:87}, { city: "Noida", state: "UP",HouseNo:22 }] },
        { name: "Ravi", age: 28, address: [{ city: "Delhi", state: "Delhi" ,HouseNo:4}, { city: "Noida", state: "UP",HouseNo:77 }] },
    ];

    useEffect(() => {
        console.log(EmpData);
    }, []);

    return (
        <div>
            <h1>Table </h1>
            <Table border="2" striped variant="dark">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th style={{textAlign:"center"}}>Address</th>
                    </tr>
                </thead>
                <tbody>

                    {EmpData.map((data, index) => (

                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>
                                <Table border="2" striped variant="dark" style={{textAlign:"center"}}>
                                    <thead>
                                        <tr>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>HouseNo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.address.map((item,i) => (
                                                <tr key={i}>
                                                    <td>{item.city}</td>
                                                    <td>{item.state}</td>
                                                    <td>{item.HouseNo}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default NestedList;

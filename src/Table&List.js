import React, { useEffect,useState } from "react";
import { Table } from "react-bootstrap";

function TableList() {
    const EmpData = [
        { id: 0, name: "Joginder", age: 25 },
        { id: 0, name: "Ram", age: 26 },
        { id: 0, name: "Shyam", age: 27 },
        { id: 0, name: "Ravi", age: 28 },
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
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {EmpData.map((data,i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h1> Lists</h1>
            {
                EmpData.map((data) => (
                    <ul key={data.id}>
                        <li>Id:{data.id}</li>
                        <li>Name:{data.name}</li>
                        <li>Age:{data.age}</li>
                    </ul>
                ))
            }
        </div>
    );
}

export default TableList;

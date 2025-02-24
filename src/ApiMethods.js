import { useEffect, useState } from "react";

// as App.js
function ApiMethods() {
    const [data, setData] = useState([])
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    useEffect(() => {
        fetchUserData();

    }, [])

    const fetchUserData = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const userData = await result.json()
        setData(userData)
        setId(userData[0].id)
        setName(userData[0].name)
        setEmail(userData[0].email)
    }

    const deleteRecord = async (id) => {
        const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "delete"
        })
        setData(data.filter(user => user.id !== id));
        const res = await result.json()
        console.warn(res);
        // fetchUserData();
    }
    const updateRecord = async (id) => {
        console.warn(data[id - 1])
        let item = data[id - 1];
        setId(item.id)
        setName(item.name)
        setEmail(item.email)
    }

    const updateUserData = async () => {
        console.warn(id, name, email);
        let item = { id, name, email }
        const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        const res = await result.json()
        console.warn(res);
        setData(data.map(user => (user.id === id ? { ...user, name, email } : user)));

    }
    // console.warn(data);
    return (
        <div>
            <h1>This is Api Method </h1>
            <table border='2'>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Operations</th>
                </thead>
                <tbody>
                    {
                        data.map((user, key) => (
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => deleteRecord(user.id)}>Delete</button></td>
                                <td><button onClick={() => updateRecord(user.id)}>Update</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

            <h1>Update Data</h1>
            <br />
            <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} />
            <br />
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <button onClick={() => updateUserData()}>Update User Data</button>


        </div>
    )
}
export default ApiMethods;
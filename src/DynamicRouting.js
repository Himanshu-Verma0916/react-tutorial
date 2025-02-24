// as App.js
import UsersData from './component/UsersData';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function DynamicRouting() {
    const users = [
        { id: 1, name: "Akash", email: "ak@test.com" },
        { id: 2, name: "Pooja", email: "ak@test.com" },
        { id: 3, name: "Himanshu", email: "ak@test.com" },
        { id: 4, name: "Shivam", email: "ak@test.com" }
    ];

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Dynamic Routing</h1>
            {
                users.map((item,key) => (
                    // <Link to={"/usersData" + item.id + item.name}><h3>{item.name}</h3></Link>
                    <Link to={`/usersData/${item.id}/${item.name}`} key={key}>
                        <h3>{item.name}</h3>
                    </Link>
                ))
            }
            <Routes>
                <Route path="/usersData/:id/:name" element={<UsersData />} />
            </Routes>
        </div>
    );
}

export default DynamicRouting;
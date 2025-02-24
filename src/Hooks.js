// As App.js
import './style.css'
import style from './custom.module.css';
import React, { useState, useEffect, use } from 'react';
import PropsWithHooks from './PropsWithHooks';
import { Button,ListGroup } from 'react-bootstrap';

function Hooks() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Joginder");
    useEffect(() => {
        console.log("useEffect called");
        document.title = `You clicked ${count} times`;
    }, [count]);
    useEffect(() => {
        console.log("useEffect called for both state update");
        // console.log(style);
    });
    return (
        <div>
            <h1>Hooks related information {count},{name}</h1>
            <button onClick={() => { setCount(count + 1) }}>Update Counter</button>
            <button onClick={() => { setName("Ram") }}>Update Name</button>

            <PropsWithHooks name={name} />

            {/* styling in react */}
            <h1 style={{ color: 'red', backgroundColor: 'black' }}>Style type1</h1>
            <h1 className="primary">Style type2</h1>
            <h1 className={style.success}>Style type3</h1>

            {/* bootstrap */}
            <>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </>
            <>
                <Button variant="outline-primary">Primary</Button>
                <Button variant="outline-secondary">Secondary</Button>
                <Button variant="outline-success">Success</Button>
                <Button variant="outline-warning">Warning</Button>
                <Button variant="outline-danger">Danger</Button>
                <Button variant="outline-info">Info</Button>
                <Button variant="outline-light">Light</Button>
                <Button variant="outline-dark">Dark</Button>
            </>

            {/* bootstrap List */}
            <ListGroup as="ul">
                <ListGroup.Item as="ol" numbered active>
                    {/* <Listgroup as="ol" numbered>
                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                    </Listgroup> */}
                    <ol>
                        <li>Dapibus ac facilisis in</li>
                        <li>Dapibus ac facilisis in</li>
                        <li>Dapibus ac facilisis in</li>
                    </ol>
                </ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>



        </div>
    )
}
export default Hooks;
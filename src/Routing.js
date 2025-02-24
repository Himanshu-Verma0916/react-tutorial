// as App.js
import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Nav from './component/Nav';
import Page404 from './component/Page404';
import Users from './component/Users';
import Contact from './component/Contact';
import Filter from './component/Filter';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';
import Login from './component/Login';
import Protected from './component/Protected';

function Routing() {
    return (
        <div style={{ textAlign: "center" }}>
            {/* <h1>Hello React Router Dom</h1> */}
            <BrowserRouter>
                <Nav />

                {/* <Link to="/about">About</Link><br/>
            <Link to="/">Home</Link> */}              {/* setting both links in common component Nav.js */}
                <Routes>
                    {/* <Route path='/' element={<Home />} /> */}
                    {/* <Route path='/about'  element={<About />} />
                    <Route path='/filter' element={<Filter />} /> */}
                    
                    <Route path='/' element={<Protected Component={Home} />} />
                    <Route path='/about' element={<Protected Component={About} />} />
                    <Route path='/filter' element={<Protected Component={Filter} />} />

                    <Route path='/users/:name' element={<Users />} />

                    {/* 404 error page */}
                    {/* way1 */}
                    {/* <Route path='/*' element={<h1>404 Error PAGE</h1>}/> */}

                    {/* way2 */}
                    <Route path='/*' element={<Page404 />} />

                    {/* for other than valid paths ,opens only home page */}
                    {/* way1 */}
                    {/* <Route path='/*' element={<Home/>}/>   */}

                    {/* way2 */}
                    {/* for other than valid paths ,navigate to home page */}
                    {/* <Route path='/*' element={<Navigate to="/"/>}/>   */}

                    <Route path='/contact/' element={<Contact />}>
                        <Route path='company' element={<Company />} />
                        <Route path='channel' element={<Channel />} />
                        <Route path='other' element={<Other />} />

                    </Route>
                    <Route path='/login' element={<Login />} />

                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Routing;
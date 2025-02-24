import {Link,Outlet} from 'react-router-dom';
function Contact(){
    return (
        <div>
            <h1>Contact Page</h1>
            <p>This is Contact page jhjshfdkjxshbhhzcmnz </p>
            {/* <Link to="/">Go to Home</Link> */}

            <Link to='company' style={{textDecoration:"none"}}>Company </Link>
            <Link to='channel' style={{textDecoration:"none"}}>Channel </Link>
            <Link to='other' style={{textDecoration:"none"}}>Other</Link>
            <Outlet/>
        </div>
    )
}
export default Contact;
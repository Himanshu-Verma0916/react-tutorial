import {Link,useLocation} from 'react-router-dom';
function About(){
    const location= useLocation();
    console.warn(location);
    return (
        <div>
            <h1>About Page</h1>
            <p>This is About page jhjshfdkjxshbhhzcmnz </p>
            <Link to="/">Go to Home</Link>

            <ul>
               <li><Link to='/users/Himanshu' state={{name:"Rohan",age:55}} >Himanshu</Link></li>
               <li><Link to='/users/Dhoni' >Dhoni</Link></li>
               <li><Link to='/users/Virat' >Virat</Link></li>
            </ul>
        </div>
    )
}
export default About;
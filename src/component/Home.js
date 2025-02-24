import {Link,useNavigate} from 'react-router-dom';
function Home(){
    let navigate=useNavigate();
    const navToPage=(url)=>{
        navigate(url);
    }
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is Home page jhjshfdkjxshbhhzcmnz </p>
            <Link to="/about">Go to About</Link>
            <br/>
            <button onClick={()=>navigate('/about')}>About Page</button>  {/* way1*/}
            <br/>
            <button onClick={()=>navToPage('/')}>Home Page</button>  {/* way2*/}
            <br/>
            <button onClick={()=>navToPage('/filter')}>Filter Page</button>
        </div>
    )
}
export default Home;
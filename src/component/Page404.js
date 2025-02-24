import {Link} from 'react-router-dom';
function Page404(){
    return (
        <div>
            <h1>Page 404 error ,go to home page on clicking link</h1>
            <li><Link to="/">Go to Home</Link></li>
            
        </div>
    )
}
export default Page404;
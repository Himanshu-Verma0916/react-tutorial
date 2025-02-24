// import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// we have to use NavLink instead of Link ,because we can't add className with link, it causes problem.
//So we have to replace each Link to NavLink
function Nav() {
    return (
        <div className='NavBar'>
            {/* <h1>NavBar</h1> */}
            <ul>
                <li><NavLink
                    style={({ isActive }) => ({ color: isActive ? "red" : "#ffffff" })}
                    to="/" className={'Nav-li'}>Home</NavLink></li>

                <li><NavLink
                    style={({ isActive }) => ({ color: isActive ? "red" : "#ffffff" })}
                    to="/about" className={'Nav-li'}>About</NavLink></li>

                <li><NavLink
                    style={({ isActive }) => ({ color: isActive ? "red" : "#ffffff" })}
                    to="/contact" className={'Nav-li'}>Contact Us</NavLink></li>

                <li><NavLink
                    style={({ isActive }) => ({ color: isActive ? "red" : "#ffffff" })}
                    to="/filter" className={'Nav-li'}>Filter Params</NavLink></li>

                <li><NavLink
                    style={({ isActive }) => ({ color: isActive ? "red" : "#ffffff" })}
                    to="/login" className={'Nav-li'}>Login</NavLink></li>
            </ul>
        </div>
    )
}
export default Nav;
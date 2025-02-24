// as App.js  L-59
import {Route,Routes} from 'react-router-dom';
import Nav from './Nav';
import Home from './HomeRoute';
import About from './AboutRoute';
function RouterSetup(){
    return(
        <div style={{textAlign:"center"}}>
            {/* <BrowserRouter>              we import it directly in index.js which is recommended*/}  
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/*' element={<Page404/>}/>
            </Routes>
            {/* </BrowserRouter> */}
        </div>
    )
}

function Page404(){
    return(
        <div>
            <h>Page not found</h>
        </div>
    )
}
export default RouterSetup;
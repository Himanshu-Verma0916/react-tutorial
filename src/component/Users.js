import {useParams,useLocation} from 'react-router-dom';
function Users(){
    const location= useLocation();
    console.warn(location);
    const params=useParams();
    const {name}=params;
    return (
        <div>
            <h1>this is {name}'s Page</h1>
        </div>
    )
}
export default Users;
import { useParams } from "react-router-dom";
function UsersData(){
    // console.warn(props.match.params.id); /// cause error because in latest version it is not supported
    const params=useParams();
    const{id,name}=params
    console.warn(params);
    return (
        <div>
            <h1>this is Users({name}) Page No:{id} </h1>

        </div>
    )
}
export default UsersData;
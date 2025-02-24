import { CommonContext } from "./CommonContext";

export default function UpdateButton(){
    return(
        <CommonContext.Consumer>
            {({updateColor})=>(
                <div>
                <button onClick={()=>updateColor("yellow")}>Update Color</button>
                <button onClick={()=>updateColor("skyblue")}>Update Color</button>
                <button onClick={()=>updateColor("red")}>Update Color</button>
                </div>
            )}
        </CommonContext.Consumer>
    )
}
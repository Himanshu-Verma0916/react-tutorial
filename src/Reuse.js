function Reuse(props){
    return (
        <div style={{textAlign:"center"}}>
            <span>{props.info.name+" "}</span>
            <span>{props.info.age}</span>
            {/* <button onClick={()=>alert(`hello ${props.info.name}`)}>Click!</button> */}
        </div>
    )
}
export default Reuse;
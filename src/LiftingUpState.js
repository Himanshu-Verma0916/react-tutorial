function LiftingUpState(props) {
    const data="Hello Parent";
  return (
    <div>
      <p>LiftingUpState</p>
      <button onClick={()=>alert(data)}>Send To parent</button>
    </div>
  );
}
export default LiftingUpState;
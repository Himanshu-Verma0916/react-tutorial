import React from "react";

function User2(props) {
  return (
    <div>
      <h1>User2</h1>
      <button onClick={props.data}>Get Data from Parent</button>
    </div>
  );
}
export default User2;
import React from "react";

export default function User1(props) {
  return (
    <div>
      <h1>User1</h1>
      <button onClick={props.data}>Get Data from Parent</button>
    </div>
  );
}
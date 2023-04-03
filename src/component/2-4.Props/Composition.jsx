import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Composition() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="ara" />
      <Welcome name="ra" />
      <Welcome name="a" />
    </div>
  );
}

export default Composition;

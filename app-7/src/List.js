import React, { Component } from "react";
import Todo from "./Todo";

function List(props) {
  let list = props.tasks.map((element, index) => {
    return <Todo key={index} task={element} />;
  });
  return <div>{list}</div>;
}

export default List;

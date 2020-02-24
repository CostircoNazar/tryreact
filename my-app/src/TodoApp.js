import React from "react";

function TodoApp(props) {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => props.handleChange(props.option.complited)}
        onChange={() => console.log(props.option.id)}
      />
      <p>{props.option.name}</p>
      <p>{props.option.when}</p>
      <p>{props.option.task}</p>

      <button onClick={() => console.log("Saved")}>Save</button>
    </div>
  );
}

export default TodoApp;

import React from "react";

function TodoApp(props) {
  let pStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={props.option.complited}
        onChange={() => props.handleChange(props.option.id)}
      />
      <div
        className="paragraphTasks"
        style={props.option.complited ? pStyle : null}
      >
        <p>{props.option.name}</p>
        <p>{props.option.when}</p>
        <p>{props.option.task}</p>
      </div>
      <button onClick={() => console.log("Saved")}>Save</button>
    </div>
  );
}

export default TodoApp;

import React from 'react';


function TodoApp(props) {

  return (
    <div>
      <input  type='checkbox' checked={props.thing.complited} readOnly/>
      <p> {props.thing.id} </p>
      <p>{props.thing.name}</p>
      <p>{props.thing.item}</p>
      <p>{props.thing.when}</p>
      <p>{props.thing.complited}</p>
    </div>
  )
}
export default TodoApp

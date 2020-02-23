import React from 'react'

function handleClick(it) {
  console.log(it)
}

function TodoApp(props) {
  return(
    <div className="mytodo">
      <input type="checkbox" checked={props.option.complited} onChange={()=>props.handleChange(props.option.id)}/>
      <p>{props.option.name}</p>
      <p>{props.option.item}</p>
      <button onClick={handleClick} >Save</button>

    </div>
  )
}



export default TodoApp

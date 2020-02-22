import React from 'react';


  function mouseOver() {
    console.log('OVER , OVER!')
  }

function TodoApp(props) {
  return <div>
    <img alt='img'
         src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dvp___9wVgsp2a3QC4iKcgHaEK%26pid%3DApi&amp;f=1"/>
    <input type='checkbox' checked={props.thing.complited} onChange={() => props.handleChange(props.thing.id)}/>

    <p>{props.thing.name}</p>
    <p>{props.thing.item}</p>
    <p>{props.thing.when}</p>

    <button onClick={mouseOver}>Click</button>
  </div>
}
export default TodoApp

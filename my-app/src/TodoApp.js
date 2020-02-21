import React from 'react';



  function handleClick(){
    console.log('Clicked')
  }

  function mouseOver() {
    console.log('OVER , OVER!')
  }

function TodoApp(props) {
  return <div>
    <img onMouseOver={handleClick} alt='img'
         src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dvp___9wVgsp2a3QC4iKcgHaEK%26pid%3DApi&amp;f=1"/>
    <input type='checkbox' checked={props.thing.complited} readOnly/>

    <p>{props.thing.name}</p>
    <p>{props.thing.item}</p>
    <p>{props.thing.when}</p>

    <button onClick={mouseOver}>Click</button>
    <button onMouseOver={handleClick}>Click</button>
  </div>
}
export default TodoApp

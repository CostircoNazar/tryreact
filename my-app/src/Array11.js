import React from 'react';


function Array11(props) {

  return (
    <div>
      <img style={{width: 300, height: 300}} src={props.imgUrl} alt='logo'/>
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
      <h3>Phone: {props.phone}</h3>
      console.log(props.phone );
    </div>
  )
}
export default Array11

import React from 'react'

function ContactCards(props) {
  return (
    <div>
      <img src={props.contact.imgUrl} alt='logo'/>
      <h2>Name: {props.contact.name}</h2>
      <h3>Email: {props.contact.email}</h3>
      <h3>Phone: {props.contact.phone}</h3>
    </div>
  )
}


export default ContactCards

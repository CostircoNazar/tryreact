import React, {useState, useEffect} from 'react'


function Input() {
  const [emailText, useEmail] = useState('email');
  const [passwordText, usePassword] = useState('password');

  function handleChange() {
    target.value
  }


  return (
    <form>

      <input
        type='text'
        placeholder='Email'
        value={useEmail(emailText)}
        onChange={handleChange}
        required/>

      <input
        type='text'
        placeholder='Password'
        value={usePassword(passwordText)}
        required/>

    </form>
  )
}

export default Input


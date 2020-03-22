import React, {useState, useEffect} from 'react'


function Input() {
  const [emailText, useEmail] = useState('email');
  const [passwordText, usePassword] = useState('password');


 function handleInput(event) {
    //const { name, value } = event.target;

    useEmail(emailText);
    usePassword(passwordText)
  }


  return (
    <form>

      <input
        type='text'
        placeholder='Email'
        name='email'
        value={emailText}
        onChange={handleInput}
        required/>

      <input
        type='text'
        placeholder='Password'
        name='password'
        value={passwordText}
        onChange={handleInput}
        required/>

    </form>
  )
}

export default Input


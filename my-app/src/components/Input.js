import React, {useState, useEffect} from 'react'


function Input() {
  const [emailText, useEmail] = useState('email');
  const [passwordText, usePassword] = useState('password');


 function handleInput(event) {
    const { name, value } = event.target;
    setState({
      [name]: value
    });
  }


  return (
    <form>

      <input
        type='text'
        placeholder='Email'
        name='email'
        value={useEmail(emailText)}
        onChange={handleInput}
        required/>

      <input
        type='text'
        placeholder='Password'
        name='password'
        value={usePassword(passwordText)}
        required/>

    </form>
  )
}

export default Input


import React, {useState} from 'react';
import Input from './Input.js';
import SubmitButton from './SubmitButton.js';


function LoginForm() {

	const{userName, setEmail} = useState('');
	const{currentPassword, setPassword} = useState('');


	function handleChange(event) {
		setEmail(event.target.value);
		setPassword(event.target.value);
	}


	function onSubmit() {
		alert('Login state is ' + userName + ' ' + currentPassword)
	};

		return(

			<form  action="/url-where-you-want-to-submit-form-data"
						 onSubmit={onSubmit} >
				<Input className='login-input'
					type='text'
					placeholder='userName'
					name='userName'
					value={this.state.email}
					onChange={handleChange}
				/>
				<Input
					type='password' autoComplete=''
					placeholder='password'
					name='currentPassword'
					value={this.state.password}
					onChange={handleChange}
				/>

				<SubmitButton label='Login'/>
			</form>
		)
}


export default LoginForm
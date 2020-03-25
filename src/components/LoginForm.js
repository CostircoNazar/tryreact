import React, {useState} from 'react';
import Input from './Input.js';
import SubmitButton from './Button.js';

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

		const style= {
			fontSize:'20px',
			marginTop:10,
			marginBottom:10
		};

		return(

			<form  onSubmit={onSubmit}>
				<Input
					style={style}
					type='text'
					placeholder='userName'
					name='userName'
					value={this.state.email}
					onChange={handleChange}
				/>
				<Input
					style={style}
					type='password' autoComplete=''
					placeholder='password'
					name='currentPassword'
					value={this.state.password}
					onChange={handleChange}
				/>

				<SubmitButton style={{color:'red'}} label='Login'/>
			</form>
		)
}


export default LoginForm
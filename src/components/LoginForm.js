import React from 'react';
import Input from './Input.js';
import SubmitButton from './Button.js';

class LoginForm extends React.Component {
	constructor(props){
		super(props);

		this.state= {
			userName:'',
			currentPassword: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const{name, value} = event.target;
		this.setState({
			...this.state,
			[name]:value
		})
	}

	onSubmit= ()=> {
		alert('Login state is ' + this.state.userName + ' ' + this.state.currentPassword)
	};



	render() {
		const style= {
			fontSize:'20px',
			marginTop:10,
			marginBottom:10
		};

		return(

			<form  onSubmit={this.onSubmit}>
				<Input
					style={style}
					type='text'
					placeholder='userName'
					name='userName'
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<Input
					style={style}
					type='password' autoComplete=''
					placeholder='password'
					name='currentPassword'
					value={this.state.password}
					onChange={this.handleChange}
				/>

				<SubmitButton style={{color:'red'}} label='Login'/>
			</form>
		)
	}
}


export default LoginForm
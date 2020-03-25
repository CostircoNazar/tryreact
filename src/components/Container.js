import React from 'react'
import LoginForm from './LoginForm';

class Container extends React.Component {

	render(){
		let style = {
			textAlign: 'center',
			marginTop:'20%'
		};
		return(
			<div style={style} className='login-form-container' >
				<LoginForm />
			</div>

		)
	}
}




export default Container
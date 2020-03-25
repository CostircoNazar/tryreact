import React from 'react';

class Input extends React.Component {

	render() {

		return(
			<div>
				<input className='login-input' {...this.props}/>

			</div>

		)
	}

}


export default Input
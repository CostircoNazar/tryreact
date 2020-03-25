import React from 'react';


class SubmitButton extends React.Component {

	render(){
		return(

			<button type='submit'  > {this.props.label} </button>
		)
	}
}

export default SubmitButton
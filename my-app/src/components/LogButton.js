import React from "react";

class LogButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLogged: !prevState.isLogged
      };
    });
  }

  render() {
    let buttonText = this.state.isLogged ? "Log in" : "Log out";
    let displayText = this.state.isLogged ? "Logged out" : "Logged in";

    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    );
  }
}

export default LogButton;

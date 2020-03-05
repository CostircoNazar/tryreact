import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First name"
          onChange={this.handleInput}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last name"
          onChange={this.handleInput}
        />
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

export default Form;

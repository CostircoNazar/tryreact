import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      isChecked: false,
      gender: "",
      favColor: "red"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, checked, type } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last name"
            onChange={this.handleChange}
          />
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
        </form>

        <form>
          <textarea value="Text goes here" onChange={this.handleChange} />
          <input
            type="checkbox"
            name="isChecked"
            checked={this.state.isChecked}
            onChange={this.handleChange}
          />
        </form>

        <lable>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </lable>
        <br />

        <label>Favorite color : </label>
        <select
          value={this.state.favColor}
          name="favColor"
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
        </select>
      </div>
    );
  }
}

export default Form;

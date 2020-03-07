import React from "react";

class Swapi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://swapi.co/api/people/1/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          character: data
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading === true && "Is Loading"}
        {this.state.character.name}
      </div>
    );
  }
}

export default Swapi;

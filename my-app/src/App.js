import React from "react";
import TodoApp from "./TodoApp";
import Tododatasrc from "./components/Tododatasrc";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoes: Tododatasrc
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const complitedOption = prevState.todoes.map(item => {
        if (item.id === id) {
          item.complited = !item.complited;
        }
        return item;
      });
      return {
        todoes: complitedOption
      };
    });
  }

  render() {
    const todoArray = this.state.todoes.map(item => (
      <TodoApp key={item.id} option={item} handleChange={this.handleChange} />
    ));
    return <div>{todoArray}</div>;
  }
}

export default App;

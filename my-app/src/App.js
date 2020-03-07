import React from "react";
import TodoApp from "./TodoApp";
import Tododatasrc from "./components/Tododatasrc";
import Clock from "./Clock";
import Conditional from "./Conditional";
import "./App.css";
import LogButton from "./components/LogButton";
import Swapi from "./components/FetchSwapi";
import Form from "./components/FormPart1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoes: Tododatasrc, // this property is related to TodoApp
      isLoading: true // used to display Conditional component before it getting changed
      // by componentDidMount lyfecycle function.
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // lifecycle method runs right after ReactDOM.render() method.
  // Updates state so browser display new updated info
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  }

  // handleChange sets a new state by comparing 'id' property and returning new state object.
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
    //returning <TodoApp/> component as an object {todoArray}
    const todoArray = this.state.todoes.map(item => (
      <TodoApp key={item.id} option={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="App">
        {this.state.isLoading ? <h1>Loading...</h1> : <Clock />}
        <LogButton />
        <Form />
        <Swapi />

        {/* Letting App to decide the conditional 'if' logic regarding to Clock/Conditional component */}

        {/*<Conditional />*/}

        {todoArray}
      </div>
    );
  }
}

export default App;

import React from 'react';
import TodoApp from './TodoApp'
import './App.css'
import tododatasrc from './components/Tododatasrc'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoes: tododatasrc
    }
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodoes = prevState.todoes.map(todo => {
        if (todo.id === id) {
          todo.complited = !todo.complited
        }
        return todo
      })
      return {
        todoes: updatedTodoes
      }
    })

  }

  render() {

    let todo = this.state.todoes.map(thing =>
      <TodoApp key={thing.id}
               thing={thing}
               handleChange={this.handleChange}

      />);
    return (
      <div className='App'>
        {todo}
      </div>
    )
  }
}

export default App;

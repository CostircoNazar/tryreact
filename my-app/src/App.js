import React from 'react';
import TodoApp from './TodoApp'
import './App.css'
import tododatasrc from './components/Tododatasrc'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoess: tododatasrc
    }
  }
  render() {

    let todo = this.state.todoess.map(thing =>
      <TodoApp key={thing.id}
               thing={thing}
      />);
    return (
      <div className='App'>
        {todo}
      </div>
    )
  }
}

export default App;

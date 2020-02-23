import React from 'react'
import TodoApp from './TodoApp'
import Tododatasrc from './components/Tododatasrc'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoes:Tododatasrc
    };

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(id) {
    this.setState(lastState => {
      const todo = lastState.todoes.map((item) => {
          if (id === item.id) {
            item.complited = !item.complited
          }
          return item

        }
      );
      return {
        todoes: todo
      }

    })
 }

  render() {
    const acrossTodoDataSrc = this.state.todoes.map((prevState) =>
      <TodoApp key={prevState.id}
               option={prevState}
               handleChange={this.handleChange}
      />);
    return(
      <div>
        {acrossTodoDataSrc}
      </div>
    )
  }
}


export default App

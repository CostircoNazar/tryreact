import React from 'react';
import TodoApp from './TodoApp'
import './App.css'
import tododatasrc from './components/Tododatasrc'

function App() {
  let todo = tododatasrc.map(thing =>
    <TodoApp key={thing.id}
             thing={thing}
    />);

  return (
      <div className='App'>
        {todo}


    </div>
  );
}

export default App;

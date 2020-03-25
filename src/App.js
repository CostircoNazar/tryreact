import React from 'react';
import './App.css';
import Container from './components/Container.js';



class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Container style={{margin: 50 }}/>
      </div>
    );
  }
}

export default App;

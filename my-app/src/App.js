import React from 'react';
import Array11 from './Array11'
import './App.css'
import data from './components/data'

function App() {
  let contactComponent = data.map(contComp =>
    <Array11
      key={contComp.id}
      name={contComp.name}
      email={contComp.email}
      imgUrl={contComp.imgUrl}
      phone={contComp.phone} />
      );
  return (
      <div className='App'>
        {contactComponent}
        <Array11/>

    </div>
  );
}

export default App;

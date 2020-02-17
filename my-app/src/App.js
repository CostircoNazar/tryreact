import React from 'react';
import ContactCards from './components/ContactCards.js'
import './App.css'

function App() {
  return (
      <div className='App'>
        <ContactCards contact={
          {name: "Mr. Nazar Costirco",
            imgUrl:"//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F06%2F21%2F15%2F00%2Fnazar-1471215_960_720.png&amp;f=1&amp;nofb=1",
            phone: "(+44)74-550-85-625",
            email: "Costicocorp@icloud.com"
          }
        }/>
    </div>
  );
}

export default App;

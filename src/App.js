import React from "react"
import './App.css';

import PersonCard from "./components/MyNewComponent"

function App() {
  return (
    <div className="App">
      <PersonCard name="Doe, Jane" age={45} hair_color="Hair Color: Black" />
      <PersonCard name="Smith, John" age={88} hair_color="Hair Color: Brown" />
    </div>
  );
}

export default App;
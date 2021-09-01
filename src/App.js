import React from "react"
import './App.css';

import PersonCard from "./components/MyNewComponent"

function App() {
  return (
    <div className="App">
      <PersonCard name="Doe, Jane" age="Age: {this.state.age}" hair_color="Hair Color: Black" />
      <PersonCard name="Smith, John" age="Age: {this.state.age}" hair_color="Hair Color: Brown" />
    </div>
  );
}

export default App;
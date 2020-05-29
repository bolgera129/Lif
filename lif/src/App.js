import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
import Main from "./Components/Main/Main"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
import Main from "./Components/Main/Main"
import Contact from "./Components/Contact/Contact"
import About from "./Components/About/About"
import Cart from "./Components/Cart/Cart"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path = "/contact">
            <Contact/>
          </Route>
          <Route path = "/about">
            <About/>
          </Route>
          <Route path = "/cart">
            <Cart/>
          </Route>
          <Route path ="/">
            <Main/>
          </Route>
        </Switch>
      </div>      
    </Router>

  );
}

export default App;

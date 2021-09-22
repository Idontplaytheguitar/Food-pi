import './App.css';
import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Nav from './Components/nav'
import Landing from './Components/landing';
import Home from './Components/home';


function App() {


  return (
    <div className="App">

      <Route exact path="/landing"> 
        <Landing></Landing>
      </Route>

      <Route exact path="/">
        <Redirect to= "/landing"/>
      </Route>

      <Route path="/home">
        <Home></Home>
      </Route>

      
    </div>
  );
}

export default App;

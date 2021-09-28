import './App.css';
import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Landing from './Components/landing';
import Home from './Components/home';
import Nav from './Components/nav';
import CreateRecipe from './Components/createRecipe';
import Details from './Components/details';

function App() {


  return (
    <div className="App">

      <Route exact path="/landing"> 
        <Landing></Landing>
      </Route>

      <Route exact path="/">
        <Redirect to= "/landing"/>
      </Route>

      <Route exact path="/home">
        <Nav/>
        <Home></Home>
      </Route>

      <Route exact path='/home/recipe/:id' render={({match}) => <Details match={match} /> }/>

      <Route exact path= '/home/add'>
        <Nav/>
        <CreateRecipe></CreateRecipe>
      </Route>
    </div>
  );
}

export default App;

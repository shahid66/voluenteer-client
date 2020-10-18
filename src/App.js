import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import WorkCatagories from './Components/WorkCatagories/WorkCatagories';
import Login from './Components/LogIN/Login';
import Register from './Components/Register/Register';
import Event from './Components/Event/Event';
import Header2 from './Components/Header/Header2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import EventComponent from './Components/EventComponent/EventComponent';
import AddEvents from './Components/AddEvents/AddEvents';


export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    <Header></Header>
    <Switch>
        <Route exact path="/home">
        
          <WorkCatagories></WorkCatagories>
        </Route>
        <Route exact path="/addEvents">
        
        <AddEvents></AddEvents>
      </Route>
        <Route path="/donation">
          
          <h3>This is donation page</h3>
        </Route>

        <PrivateRoute path="/register/:key">
          
          <Register></Register>
        </PrivateRoute>
        <PrivateRoute path="/event">
          
          <Event></Event>
        </PrivateRoute>
        <Route path="/login">
        
          <Login></Login>
        </Route>
        <Route path="*">
        
          <h3>404 page not found</h3>
        </Route>
    </Switch>
  </Router>
  </UserContext.Provider>      
  );
}

export default App;

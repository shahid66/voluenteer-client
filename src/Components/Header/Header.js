import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../logos/Group 1329.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import SearchBar from '../SearchBar/SearchBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Header = () => {
   
    return (
<div className='backgroundMask' >
<Navbar bg="light" sticky='top' expand="lg">
      <Navbar.Brand href="#home"><img style={{width:'200px'}} src={Logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        
                <Link className='nav-link'  to="/home">Home</Link>
                <Link className='nav-link' to="/donation">Donation</Link>
                <Link className='nav-link' to="/event">Event</Link>
                <Link className='nav-link' to="/blog">Blog</Link>
                <Link className='nav-link' to="/login">Login</Link>
        
      </Nav>
  </Navbar.Collapse>
  
</Navbar>
<SearchBar></SearchBar>
</div>
    );
};

export default Header;


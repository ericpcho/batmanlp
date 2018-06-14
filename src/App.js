import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home.js'
import Thanks from './components/thanks/thanks.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function Layout(){
  return (
    <Router>

        <div>
          <Route path="/thanks" component={Thanks} />
          <Route exact path="/" component={Home} />
        </div>

    </Router>
  )
}

export default Layout;

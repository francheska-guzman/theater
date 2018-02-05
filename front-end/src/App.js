import React, { Component } from 'react';

import 'reset-css/reset.css';
import './App.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
  Switch
  } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
         <Route startsWith path="/theater" component={() => (<Navigation />) }/>
         <Route startsWith path="/theater" component={() => (<Header />) }/>
         <Switch>
            <Route exact path="/theater" component={() => ( <Home /> )} />
            <Route path="/theater/movie" component={() => ( <Movie /> )} />
         </Switch>
         <Route startsWith path="/theater" component={() => (<Footer />) }/>
        </div>
      </Router>
    );
  }
}

export default App;

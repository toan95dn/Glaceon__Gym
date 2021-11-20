import './App.css';
import React, { Component } from 'react'
import {BrowserRouter as Route, Link, Router, Routes} from 'react-router-dom';
import Home from './home';
import Preference from './preference';
import Match from './match';
import Profile from './profile';


export default class App extends Component {
  render() {
    return (
        <div>
            <h1>Hi</h1>
            <Router>
                <Routes>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/match" component={Match}></Route>
                    <Route exact path="/profile" component={Profile}></Route>
                    <Route exact path="/preference" component={Preference}></Route>
                </Routes>
            </Router>
        </div>

    )
  }
}



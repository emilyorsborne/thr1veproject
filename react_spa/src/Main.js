import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
  import App from "./App";
  import AppTodo from "./AppTodo";
  import './Main.css';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
        <h1>thr1ve</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/resolutions/">My Resolutions</NavLink></li>
            <li><NavLink to="/contact">Map</NavLink></li>
            <li><NavLink to ="/app">Countdown</NavLink></li>
            <li><NavLink to="/stuff">TopResolutions</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component ={Home} />
            <Route path="/stuff" component ={Stuff} />
            <Route path="/contact" component ={Contact} />
            <Route path="/app" component = {App} />
            <Route path="/resolutions" component ={AppTodo} />
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;
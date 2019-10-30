import React, { Component } from 'react';

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

  import Home from "./home";
  import Stuff from "./stuff";
  import Contact from "./contact";
  import Colors from "./standards/colors/colors";

class Navigation extends Component{
    render() {
        return (
            <HashRouter>
                <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/standards/colors/colors">Colors</NavLink></li>
                </ul>
                <div className="content">
                    <Route path="/home" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/standards/colors/colors" component={Colors}/>
                </div>
                </div>
            </HashRouter>
        );
      }
}

export default Navigation;

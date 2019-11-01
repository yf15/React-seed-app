import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./home";
import Contact from "./contact";
import Colors from "./components/colors/colors";
import Icons from './components/icons/icons';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li>
                           <a>
                               <FontAwesomeIcon icon="bars" />
                           </a>
                        </li>
                        <li>
                            <NavLink to="/home">
                                <FontAwesomeIcon icon="home" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                <FontAwesomeIcon icon="coffee" />
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/components/colors/colors">
                                <FontAwesomeIcon icon={['fab', 'apple']} />
                                Colors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/components/icons/icons">
                                <FontAwesomeIcon icon={['fab', 'microsoft']} />
                                Icons
                            </NavLink>
                        </li>
                    </ul>
                    <div className="content">
                        <Route path="/home" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/components/colors/colors" component={Colors} />
                        <Route path="/components/icons/icons" component={Icons} />
                    </div>

                </div>
            </HashRouter>
        );
    }
}



export default Layout;

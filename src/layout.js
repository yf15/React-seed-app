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

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.toggleForSideNav = this.toggleForSideNav.bind(this);
    }

    toggleForSideNav(){
        const currentState = this.state.isToggleOn;
        this.setState({isToggleOn: !currentState});
        // equal to function below:
        // this.setState(prevState=> ({
        //     isToggleOn: !prevState.isToggleOn
        // }));
    }


    render() {
        return (
            //learned from
            //https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
            <HashRouter>
                <div>
                    <ul className="header">
                        <li>
                           <a 
                            id="toggle-nav" 
                            onClick={this.toggleForSideNav}
                            className = {this.state.isToggleOn ? "rotate" : null}
                           >
                               <FontAwesomeIcon icon="bars" />
                           </a>
                        </li>
                        <li>
                            <NavLink exact to="/">
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
                        <Route exact path="/" component={Home} />
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

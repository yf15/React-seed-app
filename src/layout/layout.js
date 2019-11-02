import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./home";
import Contact from "../contact/contact";
import SideNav from "./sideNav"
import "./layout.css";
import Colors from "../components/colors/colors";
import Icons from '../components/icons/icons';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      sideActive: "",
      prevScrollpos: window.pageYOffset,
      headVisible: ""
    };
    this.toggleForSideNav = this.toggleForSideNav.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the head menu.
  handleScroll(e) {
    e.preventDefault();
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;

    this.setState({
      prevScrollpos: currentScrollPos,
      headVisible: prevScrollpos > currentScrollPos ? "":"head-inactive"
    });
  };


  toggleForSideNav(e) {
    e.preventDefault();
    console.log(this.state)
    const currentState = this.state.isToggleOn;
    this.setState({
      isToggleOn: !currentState,
      sideActive: currentState ? "" : "side-active"
    });
    // equal to function below:
    // this.setState(prevState=> ({
    //     isToggleOn: !prevState.isToggleOn
    // }));

  }



  render() {
    return (
      //learned from
      //https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
      <div>
        <HashRouter>

          <SideNav active={this.state.sideActive} />

          <div className={"head-nav " + this.state.sideActive + " " + this.state.headVisible}>
            <ul>
              <li>
                <a
                  id="toggle-nav"
                  onClick={this.toggleForSideNav}
                  className={this.state.isToggleOn ? "rotate" : null}
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
                <NavLink to="/contact/contact">
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
          </div>

          <div className={"main-content " + this.state.sideActive}>
            <Route exact path="/" component={Home} />
            <Route path="/contact/contact" component={Contact} />
            <Route path="/components/colors/colors" component={Colors} />
            <Route path="/components/icons/icons" component={Icons} />

          </div>
        </HashRouter>


      </div>
    );
  }
}



export default Layout;

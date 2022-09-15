import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import { withAuth0 } from '@auth0/auth0-react';
import "../css/style.css";
class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Navbar.Brand >My Favorite Movies ..</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home </Link></NavItem>
        {isAuthenticated && <NavItem className="nav"><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
        <NavItem><Login /></NavItem>
        <NavItem><Logout /></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default withAuth0(Header);

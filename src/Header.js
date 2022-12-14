import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import { withAuth0 } from '@auth0/auth0-react';
import "./css/style.css";
class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <header className="header">
      <Navbar>
        <Navbar.Brand >Movies Library</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {isAuthenticated && <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
        {!isAuthenticated && <NavItem><Login/></NavItem>}
        {isAuthenticated && <NavItem><Logout/></NavItem>}
      </Navbar>
    </header>
    )
  }
}

export default withAuth0(Header);

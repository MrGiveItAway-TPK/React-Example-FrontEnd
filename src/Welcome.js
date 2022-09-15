import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import "./css/style.css";

class Welcome extends React.Component {
  render() {
    return (
        <div id="welcome">
      <h1>Personal Movie Library</h1>
      <h2>Sign In To View Your Collection</h2>
      </div>
    )
  }
}

export default withAuth0(Welcome);

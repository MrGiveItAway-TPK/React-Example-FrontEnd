import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return <div>
        <h3 className='centered_h3'>Hello {user.name}</h3>
        </div>;
  }
}

export default withAuth0(Profile);
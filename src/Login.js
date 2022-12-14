import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { isAuthenticated,loginWithRedirect,} = useAuth0();

  return !isAuthenticated && (
    <button className='in_out_button' onClick={loginWithRedirect}>Log in</button>
  );
}

export default Login;
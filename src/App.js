import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestMovies from './BestMovies';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './Welcome';

class App extends React.Component {
  
  render() {

    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={isAuthenticated?<BestMovies />:
              < Welcome />

            }
              
            >
            </Route>
            <Route 
              exact path="/profile"
              element={isAuthenticated && <Profile />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

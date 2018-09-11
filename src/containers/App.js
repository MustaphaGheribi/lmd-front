import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';
import store from '../store';

import Patient from './Patient';
import Dentist from './Dentist';
import Home from './Home';

// Check for token 
if(localStorage.jwtToken) {
	// set auth token header auth 
	setAuthToken(localStorage.jwtToken);
	// decode token 
	const decoded = jwt_decode(localStorage.jwtToken);
	// set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
} else {
	store.dispatch(logoutUser());
	// this.props.history.push('/');
}
class App extends Component {
  render() {
	const state = store.getState();
  	    {
			  if(state.auth.user.isDentist) return <Dentist />; 
			  else if(state.auth.user.isPatient) return <Patient />
			  else return <Home />
	 	}
	}
}
const mapStateToProps = state => ({
	auth: state.auth,
  });
export default App;

import React, { Component } from 'react';

import Nav from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import Dashboard from '../components/patient/Dashboard';

class Patient extends Component {
	
  render() {
    return (
      <div>
	    <Nav />
      <Dashboard />
      <Footer />
	  </div>
    );
  }
}

export default Patient;
import React, { Component } from 'react';
import Footer from '../components/shared/Footer';
import Main from '../components/shared/Main';
import Nav from '../components/shared/Nav';
import Register from '../components/auth/register';
import Login from '../components/auth/login';
import { Route } from 'react-router-dom';

class Home extends Component {
	
  render() {
  	  return (

		<div className="App">
			<Nav />
			<Route exact path="/" component={Main} />
			<div className="container">
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
			</div>
			<Footer />
			</div>
  	  ) 
	}
}

export default Home;

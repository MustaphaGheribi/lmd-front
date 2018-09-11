import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  onlogoutClick(event) {
    event.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/d/signup">
           A dentist?
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    const authLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a href="#" onClick={this.onlogoutClick.bind(this)}className="nav-link">Logout</a>    
      </li>   
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
           last Minute Dentists
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
          <span className="navbar-toggler-icon" />
          </button>
          {isAuthenticated ? authLinks : guestLinks }
          </div>
      </nav>
    );
  }
}

Navbar.proptypes = {
  logoutUser : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './bootstrap-social.css';
import classnames from 'classnames';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    }
    this.onChange= this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      if(nextProps.errors.includes('"name"')) this.setState({errors: {name: nextProps.errors}});
      else if(nextProps.errors.includes('"email"')) this.setState({errors: {email: nextProps.errors}});
      else if(nextProps.errors.includes('"password"')) this.setState({errors: {password: nextProps.errors}});
    }
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
   this.props.registerUser(newUser, this.props.history);  
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your account</p>
              <div className="form-group">
              <a className="btn btn-block btn-social btn-facebook">
                <span className="white fab fa-facebook"></span>
                 Sign in with Facebook   
              </a>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text"
                  className={classnames('form-control form-control-lg' , {
                    'is-invalid': errors.name
                  })}
                    placeholder="Name" 
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                  <input type="email" 
                  className={classnames('form-control form-control-lg',{
                    'is-invalid': errors.email
                  })} 
                  placeholder="Email Address" 
                  name="email"
                  value={this.state.email} 
                  onChange={this.onChange}   
                  />
                  {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                  <input type="password" 
                 className={classnames('form-control form-control-lg',{
                    'is-invalid': errors.password
                  })} 
                  placeholder="Password" 
                  name="password" 
                  value={this.state.password}
                  onChange={this.onChange}
                  />
                   {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" value="Sign up" />
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

Register.proptypes = {
  registerUser : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
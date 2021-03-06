import React, { Component } from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      errors: {}
    }
    this.onChange= this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    else if(nextProps.errors) {
      if(nextProps.errors.includes('"email"')) this.setState({errors: {email: nextProps.errors}});
      else if(nextProps.errors.includes('"password"')) this.setState({errors: {password: nextProps.errors}});
      else if(nextProps.errors.includes('Invalid')) this.setState({errors: {invalid: nextProps.errors}});

      }
    }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginUser(userData);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
           
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
          <a className="btn btn-block btn-social btn-facebook">
             <span className="fab fa-facebook"></span> Sign in with Facebook
          </a>
          </div>
          {errors.invalid && (<div style={{color: 'red'}}>{errors.invalid}</div>)}
              <div className="form-group">
                <input type="email" 
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.email
                })}
                 placeholder="Email Address" 
                 name="email"
                 onChange={this.onChange}
                 />
                 {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
              </div>
              <div className="form-group">
                <input type="password" 
               className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password
                })}
                placeholder="Password"
                name="password"
                onChange={this.onChange}
                
                />
                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4"
              value="Sign in" />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

Login.proptypes = {
  loginUser : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
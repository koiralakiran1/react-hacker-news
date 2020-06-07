import React from 'react';
import PropTypes from 'prop-types';
import { APP_ROUTES } from '../constants/constants';
import HackerNewsLogo from '../assets/images/hn.png';

/**
 *
 *
 * @returns
 */
class Login extends React.Component {

  /**
   * Creates an instance of Login.
   *
   * @param {*} props
   * @memberof Login
   */
  constructor(props) {
    super(props);

    this.state = {
      rememberLogin: false
    };
  }

  /**
   *
   *
   * @memberof Login
   */
  toggleRememberLogin() {
    this.setState({
      rememberLogin: !this.state.rememberLogin
    });
  }

  /**
   *
   *
   * @param {*} e
   * @memberof Login
   */
  handleLoginClicked(e) {
    e.preventDefault();
    if(this.state.rememberLogin) {
      window.localStorage.setItem('isLoggedIn', true);
    } else {
      window.sessionStorage.setItem('isLoggedIn', true);
    }
    this.props.history.push(APP_ROUTES.home);
  }

  /**
   *
   *
   * @returns
   * @memberof Login
   */
  render() {
    return (
      <div className="container col-xl-5 login-box jumbotron">
        <img width="120px" height="50px" src={HackerNewsLogo} alt="Hacker News" />
        <h3> Please Login </h3>
        <button type="button" onClick={this.handleLoginClicked.bind(this)} className="btn bg-orange">Login</button>
        <p>
          <input onChange={this.toggleRememberLogin.bind(this)} type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </p>
      </div>
    );
  }
}

export default Login;

Login.propTypes = {
  history: PropTypes.any.isRequired
};

import Main from './Main';
import Login from './Login';
import '../assets/styles/App.css';
import React, { Component } from 'react';
import PrivateRoute from './PrivateRoute';
import { APP_ROUTES } from '../constants/constants';
import { Switch, Route, Redirect } from 'react-router-dom';

/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   *
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={APP_ROUTES.root} render={ (props) => {
            return (<Redirect to={APP_ROUTES.login} {...props} />);
          }} />
          <Route exact path={APP_ROUTES.login} render={(props) => {
            return (window.localStorage.getItem('isLoggedIn') || window.sessionStorage.getItem('isLoggedIn')) ?
              (<Redirect to={APP_ROUTES.home} {...props} />) : (<Login {...props} />) ;
          }} />
          <PrivateRoute path={APP_ROUTES.root} component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;

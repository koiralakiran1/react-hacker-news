import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { APP_ROUTES, STORY_TYPES, LIST_POSITIONS } from './constants/constants';
import PrivateRoute from './components/PrivateRoute';
import Main from './components/Main';
import Login from './components/Login';

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
            return (<Redirect to='/login' {...props} />);
          }} />
          <Route exact path='/login' render={(props) => {
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

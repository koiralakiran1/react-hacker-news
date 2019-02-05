import React from 'react';
import { APP_ROUTES } from '../constants/constants';
import { Redirect, Route } from 'react-router-dom';

/**
 * Private Route.
 *
 * @param {*} { Component: Component, ...rest }.
 */
const PrivateRoute = ({ component: Component, ...rest }) => {

  return (<Route
    {...rest}
    render={props =>
      (window.localStorage.getItem('isLoggedIn') || window.sessionStorage.getItem('isLoggedIn')) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: APP_ROUTES.login,
            state: { from: props.location }
          }}
        />
      )
    }
  />
  );
};

export default PrivateRoute;

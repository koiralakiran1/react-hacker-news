import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { APP_ROUTES } from '../constants/constants';
import hackerNewsLogo from '../assets/images/hn.png';

/**
 *
 *
 * @class Navigation
 * @extends {Component}
 */
class Navigation extends Component {
  /**
   *
   *
   * @returns
   * @memberof Navigation
   */
  render() {
    return (
      <div className="sticky-top container-flex bg-orange">
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <Link to={ APP_ROUTES.root } className="navbar-brand">
            <img width="120px" height="50px" src={hackerNewsLogo} alt="Hacker News" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={this.props.location.pathname === APP_ROUTES.home ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to={APP_ROUTES.home}>Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className={this.props.location.pathname === APP_ROUTES.topStories ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to={APP_ROUTES.topStories}>Top Stories</Link>
              </li>
              <li className={this.props.location.pathname === APP_ROUTES.newStories ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to={APP_ROUTES.newStories}>New Stories</Link>
              </li>
              <li className={this.props.location.pathname === APP_ROUTES.bestStories ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to={APP_ROUTES.bestStories}>Best Stories</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navigation);

Navigation.propTypes = {
  location: PropTypes.any.isRequired
};

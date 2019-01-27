import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hackerNewsLogo from '../assets/images/hn.png';

export default class Navigation extends Component {
  render() {
    return (
      <div className="container-flex">
        <nav className="container navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand">
            <img width="100px" height="40px" src={hackerNewsLogo} alt="Hacker News" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/topstories">Top Stories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newstories">New Stories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/beststories">Best Stories</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

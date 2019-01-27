import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import { List } from './components/List';
import { APP_ROUTES, STORY_TYPES, LIST_POSITIONS } from './constants/constants';

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
        <Route exact path={APP_ROUTES.root} render={ () => {
          return (<Redirect to={APP_ROUTES.home} />);
        }} />
        <Navigation />
        <Switch>
          <Route path={APP_ROUTES.home} render={ (props) => {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <List position={LIST_POSITIONS.main} type={STORY_TYPES.topStories} {...props} />
                  </div>
                  <div className="col-lg-4">
                    <List position={LIST_POSITIONS.side} type={STORY_TYPES.newStories} {...props} />
                    <List position={LIST_POSITIONS.side} type={STORY_TYPES.bestStories} {...props} />
                  </div>
                </div>
              </div>
            );
          }} />
          <Route path={APP_ROUTES.topStories} render={ (props) => {
            return (
              <div className="container">
                <List position={LIST_POSITIONS.main} type={STORY_TYPES.topStories} {...props} />
              </div>
            );
          }} />
          <Route path={APP_ROUTES.bestStories} render= { (props) => {
            return (
              <div className="container">
                <List position={LIST_POSITIONS.main} type={STORY_TYPES.bestStories} {...props} />
              </div>
            );
          }} />
          <Route path={APP_ROUTES.newStories} render= { (props) => {
            return (
              <div className="container">
                <List position={LIST_POSITIONS.main} type={STORY_TYPES.newStories} {...props} />
              </div>
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;

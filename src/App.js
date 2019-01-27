import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import List from './components/List';
import { APP_ROUTES } from './constants/constants';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path={APP_ROUTES.root} render={ () => {
              return (<Redirect to={APP_ROUTES.home} />);
            }} />
          <Navigation />
          <Switch>
            <Route path={APP_ROUTES.home} render={ () => {
              return (
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <List type="top" />
                  </div>
                  <div className="col-lg-4">
                    <List type="new" />
                    <List type="best" />
                  </div>
                </div>
              </div>
              );
            }} />
            <Route path={APP_ROUTES.topStories} render={ () => {
              return (
                <div className="container">
                  <List type="top" />
                </div>
              );
            }} />
            <Route path={APP_ROUTES.bestStories} render= { () => {
              return (
                <div className="container">
                  <List type="best" />
                </div>
              );
            }} />
            <Route path={APP_ROUTES.newStories} render= { () => {
              return (
                <div className="container">
                  <List type="new" />
                </div>
              );
            }} />
          </Switch>
      </div>
    );
  }
}

export default App;

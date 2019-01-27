import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ () => {
            return (<Redirect to="/home" />);
          }} />
        <Navigation />
        <Switch>
          <Route path="/home" render={ () => {
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
          <Route path="/topstories" render={ () => {
            return (
              <div className="container">
                <List type="top" />
              </div>
            );
          }} />
          <Route path="/beststories" render= { () => {
            return (
              <div className="container">
                <List type="best" />
              </div>
            );
          }} />
          <Route path="/newstories" render= { () => {
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

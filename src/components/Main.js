import React from 'react';
import { List } from './List';
import Comment from './Comment';
import Navigation from './Navigation';
import { Route, Switch } from 'react-router-dom';
import { APP_ROUTES, STORY_TYPES, LIST_POSITIONS } from '../constants/constants';

/**
 *
 *
 * @returns
 */
export default function Main() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path={APP_ROUTES.home} render={ (props) => {
          return (
            <div className="container app-body">
              <div className="row">
                <div className="col-lg-8 no-left-padding">
                  <List position={LIST_POSITIONS.primary} listLength={20} type={STORY_TYPES.topStories} {...props} />
                </div>
                <div className="col-lg-4 no-left-padding">
                  <List position={LIST_POSITIONS.secondary} listLength={10} type={STORY_TYPES.newStories} {...props} />
                  <List position={LIST_POSITIONS.secondary} listLength={10} type={STORY_TYPES.bestStories} {...props} />
                </div>
              </div>
            </div>
          );
        }} />
        <Route exact path={APP_ROUTES.topStories} render={ (props) => {
          return (
            <div className="container app-body">
              <List position={LIST_POSITIONS.main} listLength={20} type={STORY_TYPES.topStories} {...props} />
            </div>
          );
        }} />
        <Route exact path={APP_ROUTES.bestStories} render= { (props) => {
          return (
            <div className="container app-body">
              <List position={LIST_POSITIONS.main} listLength={20} type={STORY_TYPES.bestStories} {...props} />
            </div>
          );
        }} />
        <Route exact path={APP_ROUTES.newStories} render= { (props) => {
          return (
            <div className="container app-body">
              <List position={LIST_POSITIONS.main} listLength={20} type={STORY_TYPES.newStories} {...props} />
            </div>
          );
        }} />
        <Route exact path="/:storyId" render = { (props) => {
          return (
            <div className="container app-body">
              <Comment {...props}/>
            </div>
          );
        }} />
      </Switch>
    </>
  );
}

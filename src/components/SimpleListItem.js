import React, { Component } from 'react';

/**
 *
 *
 * @export
 * @class ListItem
 * @extends {Component}
 */
export class SimpleListItem extends Component {
  /**
   *
   *
   * @returns
   * @memberof ListItem
   */
  render() {
    return (
      <li className="list-group-item">
        <h5><span>1. </span>This is a Simple Header</h5>
        <p>by <a href="#">@user</a> | <i>4 hours ago.</i></p>
      </li>
    );
  }
}

import PropTypes from 'prop-types';
import * as Utils from '../utils/utils';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import * as RequestHandlers from '../requestHandlers/requestHandler';

/**
 *
 *
 * @export
 * @class ListItem
 * @extends {Component}
 */
export class ListItem extends Component {

  /**
   * Creates an instance of ListItem.
   *
   * @param {*} props
   * @memberof ListItem
   */
  constructor(props) {
    super(props);
    this.state = {
      itemData: {},
      relativeTimeStamp: ''
    };
  }

  /**
   *
   *
   * @memberof ListItem
   */
  async componentDidMount() {
    const itemData = await RequestHandlers.getItem(this.props.id);
    const relativeTimeStamp = Utils.timestampConvertor(itemData.time);

    this.setState( {
      itemData,
      relativeTimeStamp
    });
  }

  /**
   *
   *
   * @returns
   * @memberof ListItem
   */
  render() {
    const itemData = { ...this.state.itemData };


    return (
      <li className="list-group-item main-item">
        <p>
          By <a
            href={'https://news.ycombinator.com/user?id=' + this.state.itemData.by }>
              @{ this.state.itemData.by }
          </a> | <i>{ this.state.relativeTimeStamp}</i>
        </p>
        <h2>
          <a href={ itemData.url }>
            { itemData.title }
          </a>
        </h2>
        <p className="item-footer">
          Post ID: { itemData.id } | Score: { itemData.score } |
          <Link to={`${itemData.id}`}> Comments: { itemData.descendants }</Link>
          {/* <Link to={ itemData.id }> Comments: { itemData.descendants }</Link> doesn't work. Why? */}
        </p>
      </li>
    );
  }
}

ListItem.propTypes = {
  id: PropTypes.any.isRequired
};

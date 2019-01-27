import React, { Component } from 'react';
import * as RequestHandlers from '../requestHandlers/requestHandler';
import * as Utils from '../utils/utils';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
/**
 *
 *
 * @export
 * @class ListItem
 * @extends {Component}
 */
export class SimpleListItem extends Component {

  /**
   * Creates an instance of ListItem.
   *
   * @param {*} props
   * @memberof SimpleListItem
   */
  constructor(props) {
    super(props);
    this.state = {
      itemData: {},
      relativeTimeStamp: '',
      isLoaded: false
    };
  }

  /**
   *
   *
   * @memberof SimpleListItem
   */
  async componentDidMount() {
    const itemData = await RequestHandlers.getItem(this.props.id);
    const relativeTimeStamp = Utils.timestampConvertor(itemData.time);

    this.setState( {
      itemData,
      relativeTimeStamp,
      isLoaded: true
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

    return !this.state.isLoaded ? (<Spinner />) : (
      <li className="list-group-item simple-item">
        <p>
          By <a
            href={'https://news.ycombinator.com/user?id=' + this.state.itemData.by }>
              @{ this.state.itemData.by }
          </a> | <i>{ this.state.relativeTimeStamp}</i>
        </p>
        <h4>
          <a href={this.state.itemData.url}>
            { this.state.itemData.title }
          </a>
        </h4>
        <p className="item-footer"> <i>
          <Link to={`${itemData.id}`}>See Full Discussion</Link>
        </i>
        </p>
      </li>
    );
  }
}

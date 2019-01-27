import React, { Component } from 'react';
import * as RequestHandlers from '../requestHandlers/requestHandler';
import * as Utils from '../utils/utils';
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
      relativeTimeStamp: ''
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
    return (
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
          <a href="#">See Full Discussion</a>
        </i>
        </p>
      </li>
    );
  }
}

import React from 'react';
import { ListItem } from './ListItem';
import { SimpleListItem } from './SimpleListItem';
import { STORY_TYPES, LIST_POSITIONS } from '../constants/constants';
import { Link } from 'react-router-dom';


/**
 *
 *
 * @export
 * @class List
 * @extends {React.Component}
 */
export class List extends React.Component {

  /**
   * Creates an instance of List.
   *
   * @param {*} props
   * @memberof List
   */
  constructor(props) {
    super(props);
  }

  /**
   *
   *
   * @returns
   * @memberof List
   */
  getListTopic() {
    if(this.props.type === STORY_TYPES.bestStories) {
      return 'Best Stories';
    } else if(this.props.type === STORY_TYPES.topStories) {
      return 'Top Stories';
    } else if(this.props.type === STORY_TYPES.newStories) {
      return 'New Stories';
    }
  }

  /**
   *
   *
   * @returns
   * @memberof List
   */
  render() {
    return (
      <>
        <h3><Link to={this.props.type}>{this.getListTopic()}</Link></h3>
        <ul className="list-group">
          {this.props.position === LIST_POSITIONS.main ? <ListItem /> : <SimpleListItem />}
        </ul>
      </>
    );
  }
}

import React from 'react';
import { ListItem } from './ListItem';
import { SimpleListItem } from './SimpleListItem';
import { STORY_TYPES, LIST_POSITIONS } from '../constants/constants';
import { Link } from 'react-router-dom';
import * as RequestHandlers from '../requestHandlers/requestHandler';


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
    this.state = {
      list: [],
    };
  }

  /**
   *
   *
   * @memberof List
   */
  async componentDidMount() {
    const list = (await RequestHandlers.getStoriesIdArray(this.props.type)).slice(0, this.props.listLength);

    this.setState({
      list,
    });
  }


  /**
   *
   *
   * @param {*} prevProps
   * @memberof List
   */
  async componentDidUpdate(prevProps) {
    const list = (await RequestHandlers.getStoriesIdArray(this.props.type)).slice(0, this.props.listLength);

    if(this.props.type !== prevProps.type) {
      this.setState({
        list
      });
    }
  }
  /**
   *
   *
   * @returns
   * @memberof List
   */
  getListTopicHeader() {
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
        <h3><Link to={this.props.type}>{this.getListTopicHeader()}</Link></h3>
        <ul className={this.props.position === LIST_POSITIONS.main ? 'list-group-flush' : 'list-group'}>
          {this.state.list.map( (id) => {
            return (
              this.props.position === LIST_POSITIONS.main ?
                <ListItem id={id} key={id} /> : <SimpleListItem id={id} key={id} />
            );
          })}
        </ul>
      </>
    );
  }
}

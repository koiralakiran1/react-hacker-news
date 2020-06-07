import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import { Link } from 'react-router-dom';
import { SimpleListItem } from './SimpleListItem';
import * as RequestHandlers from '../requestHandlers/requestHandler';
import { STORY_TYPES, LIST_POSITIONS } from '../constants/constants';


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
      displayList: [],
      currentPage: 0
    };
    this.onPrevClicked = this.onPrevClicked.bind(this);
    this.onNextClicked = this.onNextClicked.bind(this);
  }

  /**
   *
   *
   * @memberof List
   */
  async componentDidMount() {
    const list = await RequestHandlers.getStoriesIdArray(this.props.type);
    const startIndex = this.state.currentPage * this.props.listLength;
    const endIndex = this.state.currentPage * this.props.listLength + this.props.listLength;
    const displayList = list.slice(startIndex, endIndex);


    this.setState({
      list,
      displayList
    });
  }



  /**
   *
   *
   * @param {*} prevProps
   * @memberof List
   */
  async componentDidUpdate(prevProps) {
    if(this.props.type !== prevProps.type) {
      const currentPage = 0;
      const list = await RequestHandlers.getStoriesIdArray(this.props.type);
      const startIndex = this.state.currentPage * this.props.listLength;
      const endIndex = this.state.currentPage * this.props.listLength + this.props.listLength;
      const displayList = list.slice(startIndex, endIndex);

      this.setState({
        displayList,
        currentPage,
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
   * @param {*} e
   * @memberof List
   */
  onPrevClicked(e) {
    e.preventDefault();
    const currentPage = (this.state.currentPage - 1) < 0 ? 0 : this.state.currentPage - 1;
    const startIndex = currentPage * this.props.listLength;
    const endIndex = startIndex + this.props.listLength;
    const displayList = this.state.list.slice(startIndex, endIndex);

    this.setState({
      currentPage,
      displayList
    });
  }

  /**
   *
   *
   * @param {*} e
   * @memberof List
   */
  onNextClicked(e) {
    e.preventDefault();
    const maxPageNumber = Math.floor( this.state.list.length / this.props.listLength ) - 1;

    const currentPage = (this.state.currentPage) >= maxPageNumber ? maxPageNumber : this.state.currentPage + 1 ;

    const startIndex = currentPage * this.props.listLength;
    const endIndex = startIndex + this.props.listLength;
    const displayList = this.state.list.slice(startIndex, endIndex);

    this.setState({
      currentPage,
      displayList
    });
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
        <div className="list-header">
          {
            this.props.position === LIST_POSITIONS.main ?
              (
                <div className="row">
                  <h3 className="col-xl-1 clickable-previous" onClick={this.onPrevClicked}>{'<'}</h3>
                  <h3 className="col-xl-10"><Link to={this.props.type}>{this.getListTopicHeader()} ({this.state.currentPage + 1})</Link></h3>
                  <h3 className="col-xl-1 clickable-next" onClick={this.onNextClicked}>{'>'}</h3>
                </div>
              ) : (<h3 className="col-xl-10"><Link to={this.props.type}>{this.getListTopicHeader()}</Link></h3>)
          }
        </div>
        <ul className='list-group'>
          {this.state.displayList.map( (id) => {
            return (
              this.props.position === LIST_POSITIONS.primary || this.props.position === LIST_POSITIONS.main ?
                <ListItem id={id} key={id} /> : <SimpleListItem id={id} key={id} />
            );
          })}
        </ul>
      </>
    );
  }
}

List.propTypes = {
  position: PropTypes.any.isRequired,
  listLength: PropTypes.any.isRequired,
  type: PropTypes.any.isRequired
};

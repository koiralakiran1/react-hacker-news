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
    const endIndex = currentPage * this.props.listLength + this.props.listLength;
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
    const currentPage = this.state.currentPage + 1;

    const startIndex = currentPage * this.props.listLength;
    const endIndex = currentPage * this.props.listLength + this.props.listLength;
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
        <div className="row">
          <h3 className="col-xl-1" onClick={this.onPrevClicked}>{'<'}</h3>
          <h3 className="col-xl-10"><Link to={this.props.type}>{this.getListTopicHeader()} ({this.state.currentPage})</Link></h3>
          <h3 className="col-xl-1" onClick={this.onNextClicked}>{'>'}</h3>
        </div>
        <ul className={this.props.position === LIST_POSITIONS.main ? 'list-group-flush' : 'list-group'}>
          {this.state.displayList.map( (id) => {
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

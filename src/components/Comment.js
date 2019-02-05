import PropTypes from 'prop-types';
import * as Utils from '../utils/utils';
import CommentItem from './CommentItem';
import React, { Component } from 'react';
import * as RequestHandlers from '../requestHandlers/requestHandler';

/**
 *
 *
 * @class Comment
 * @extends {Component}
 */
class Comment extends Component {

  /**
   * Creates an instance of Comment.
   *
   * @param {*} props
   * @memberof Comment
   */
  constructor(props) {
    super(props);
    this.state = {
      storyData: {},
      comments: [],
      errors: '',
    };
  }

  /**
   *
   *
   * @memberof Comment
   */
  async componentDidMount() {
    const storyData = await RequestHandlers.getItem(this.props.match.params.storyId);
    const comments = storyData.kids;


    if (comments) {
      comments.forEach( comment => {
        RequestHandlers
          .getItem( comment )
          .then( response => {
            this.setState({
              storyData,
              comments: [...this.state.comments, response],
              errors: ''
            });
          }
          )
          .catch(error => error);
      });
    } else {
      this.setState({
        errors: 'No Comments.',
        storyData
      });
    }
  }

  /**
   *
   *
   * @returns
   * @memberof Comment
   */
  render() {

    return this.state.comments.length !== 0 ? (
      <React.Fragment>
        <h2><a href={this.state.storyData.url}>{this.state.storyData.title}</a></h2>
        <p className="story-header">{Utils.timestampConvertor(this.state.storyData.time)} | By:
          <a href={'https://news.ycombinator.com/user?id=' + this.state.storyData.by}> @{this.state.storyData.by}</a>
        </p>
        <ul className="comment-tree list-group">
          {this.state.comments.map( comment => (
            <CommentItem data={ comment } key={ comment.id} />
          ))}
        </ul>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h2><a href={this.state.storyData.url}>{this.state.storyData.title && this.state.storyData.title}</a></h2>
        <h5><i>{this.state.errors}</i></h5>
      </React.Fragment>
    );
  }

}

export default Comment;

Comment.propTypes = {
  match: PropTypes.any.isRequired
};

import React, { Component } from 'react';
import * as RequestHandlers from '../requestHandlers/requestHandler';
import CommentItem from './CommentItem';
import * as Utils from '../utils/utils';

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
      errors: ''
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
              storyData: storyData,
              comments: [...this.state.comments, response]
            });
          }
          )
          .catch(error => error);
      });
    } else {
      this.setState({
        errors: 'No Comments.'
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

    return (
      <>
        <h2><a href={this.state.storyData.url}>{this.state.storyData.title}</a></h2>
        <p className="story-header">{Utils.timestampConvertor(this.state.storyData.time)} | By:
          <a href={'https://news.ycombinator.com/user?id=' + this.state.storyData.by}> @{this.state.storyData.by}</a>
        </p>
        {this.state.comments.length !== 0 ? (
          <ul className="comment-tree list-group">
            {this.state.comments.map( comment => (
              <CommentItem data={ comment } key={ comment.id} />
            ))}
          </ul>
        ) : (
          <p> {this.state.errors}</p>
        )}
      </>
    );
  }
}

export default Comment;

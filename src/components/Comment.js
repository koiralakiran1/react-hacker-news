import React, { Component } from 'react';
import * as RequestHandlers from '../requestHandlers/requestHandler';
import CommentItem from './CommentItem';

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
      this.setState({ errors: 'no comments to display' });
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
        <h2>{this.state.storyData.title}</h2>
        {this.state.comments.length !== 0 ? (
          <ul>
            {this.state.comments.map(data => (
              <CommentItem data={data} key={data.id} />
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

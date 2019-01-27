import React, { Component } from 'react';
import * as RequestHandlers from '../requestHandlers/requestHandler';


/**
 *
 *
 * @class CommentItem
 * @extends {Component}
 */
class CommentItem extends Component {

  /**
   * Creates an instance of CommentItem.
   *
   * @param {*} props
   * @memberof CommentItem
   */
  constructor(props) {
    super(props);
    this.state = {
      commentChild: []
    };
  }


  componentDidMount = () => {
    const { kids } = this.props.data;

    if (kids) {
      kids.forEach( kid => {
        RequestHandlers
          .getItem( kid )
          .then( response =>
            this.setState({
              commentChild: [...this.state.commentChild, response]
            })
          )
          .catch(error => error);
      });
    } else {
      this.setState({
        error: 'No Comments.'
      });
    }
  };

  /**
   *
   *
   * @returns
   * @memberof CommentItem
   */
  render() {
    const { data } = this.props;

    return (
      <div>
        <li key={data.id} dangerouslySetInnerHTML={{ __html: data.text }} />
        <div>createdAt: {new Date(data.time).toLocaleString()}</div>

        {this.state.commentChild ? (
          this.state.commentChild.map(value => (
            <div key={value.id}>
              <CommentItem data={value} key={value.id} />
            </div>
          ))
        ) : (
          <div className="progress progress-bar">
            <div className="indeterminate" />
          </div>
        )}
      </div>
    );
  }
}

export default CommentItem;

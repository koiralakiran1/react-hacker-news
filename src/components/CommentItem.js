import React, { Component } from 'react';
import * as RequestHandlers from '../requestHandlers/requestHandler';
import * as Utils from '../utils/utils';


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
      <li className="list-group-item comment">
        <p className="comment-footer">{Utils.timestampConvertor(data.time)} | By:
          <a href={'https://news.ycombinator.com/user?id=' + data.by}> @{data.by}</a>
        </p>
        <p className="comment-text" key={data.id} dangerouslySetInnerHTML={{ __html: data.text }} />
        {/* <p className="comment-header">Hello</p> */}
        {this.state.commentChild.map( child => (
          <ul className="list-group comment-child" key={child.id}>
            <CommentItem data={child} key={child.id} />
          </ul>
        ))}
      </li>
    );
  }
}

export default CommentItem;

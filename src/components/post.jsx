import React, { Component } from 'react';
import '../app.css';

class Post extends Component {
  render() {
    const { title, body } = this.props.post;
    return (
      <li className="post__bbbbox">
        <p className="post__title">{title}</p>
        <p className="post__body">{body.slice(0, 120)}...</p>
      </li>
    );
  }
}

export default Post;

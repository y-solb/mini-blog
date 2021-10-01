import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../app.css';

class Post extends Component {
  render() {
    const { title, body } = this.props.post;
    return (
      <Link
        to={{
          pathname: '/post-detail',
          state: this.props.post,
        }}
      >
        <li className="post__box">
          <p className="post__title">{title}</p>
          <p className="post__body">{body.slice(0, 120)}...</p>
        </li>
      </Link>
    );
  }
}

export default Post;

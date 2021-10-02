import React, { Component } from 'react';

class PostDetail extends Component {
  render() {
    console.log(this.props.location.state);
    const { title, body } = this.props.location.state;
    return (
      <section className="detail">
        <div className="detail__box">
          <p className="detail__title">{title}</p>
          <p className="detail__body">{body}</p>
        </div>
      </section>
    );
  }
}

export default PostDetail;

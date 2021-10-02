import React, { Component } from 'react';

class PostDetail extends Component {
  componentDidMount() {
    const { history, location } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    return (
      <>
        {location.state ? (
          <section className="detail">
            <div className="detail__box">
              <p className="detail__title">{location.state.title}</p>
              <p className="detail__body">{location.state.body}</p>
            </div>
          </section>
        ) : null}
      </>
    );
  }
}

export default PostDetail;

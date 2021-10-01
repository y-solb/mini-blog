import React, { Component } from 'react';
import axios from 'axios';
import Post from './post';

class Posts extends Component {
  state = {
    isLoading: true,
    posts: [],
  };

  getPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({ posts: data, isLoading: false });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { isLoading, posts } = this.state;
    return (
      <>
        {isLoading ? (
          <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <ul className="posts">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Posts;

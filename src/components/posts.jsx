import React, { Component } from 'react';
import axios from 'axios';
import Post from './post';

class Posts extends Component {
  state = { posts: [] };

  getPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({ posts: data });
    console.log(this.state.posts);
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { posts } = this.state;
    return (
      <ul className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}

export default Posts;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./post";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setIsLoading(false);
    };
    getPosts();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loading__box">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <ul className="posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Posts;

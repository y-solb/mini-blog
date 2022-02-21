import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import Post from "./post";
import Loading from "./loading";

const Posts = () => {
  const targetRef = useRef(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async (page) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    setPosts((prev) => [...prev, ...response.data]);
    setIsLoading(false);
  }, []);

  const handleIntersect = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    getPosts(page);
  }, [getPosts, page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <section className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ul className="posts">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        </>
      )}
      <div className="target" ref={targetRef}></div>
    </section>
  );
};

export default Posts;

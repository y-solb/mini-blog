import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

const Post = ({ post }) => {
  const { title, body, id } = post;
  return (
    <Link
      to={{
        pathname: `/post-detail/${id}`,
        state: post,
      }}
    >
      <li className="post">
        <p className="post__title">{title}</p>
        <p className="post__body">{body.slice(0, 120)}...</p>
      </li>
    </Link>
  );
};

export default Post;

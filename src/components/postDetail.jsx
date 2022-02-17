import React, { useEffect } from "react";

const PostDetail = (props) => {
  useEffect(() => {
    const { history, location } = props;
    if (location.state === undefined) {
      history.push("/");
    }
  }, [props]);

  const { state } = props.location;
  return (
    <>
      {state ? (
        <section className="detail">
          <div className="detail__box">
            <p className="detail__title">{state.title}</p>
            <p className="detail__body">{state.body}</p>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default PostDetail;

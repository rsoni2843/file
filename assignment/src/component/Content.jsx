import React from "react";
import "../App.css";
import Error from "./Error";
import Loader from "./Loader";

const Content = ({ error, loading, data }) => {
  // When the promise is rejected
  if (error) {
    return (
      <>
        <h1>Error...</h1>
        <Error />
      </>
    );
  }
  // When the promise in pending
  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
        <Loader />
      </>
    );
  }
  // When the promise is fulfilled
  return (
    <>
      <main className="content">
        <div className="parent-box">
          {data?.map((el, i) => {
            return (
              <div className="child-box" key={i}>
                <img
                  className="user-image"
                  src={el.avatar}
                  alt={`${el.first_name} image`}
                />
                <p>
                  {el.first_name} {el.last_name}
                </p>
                <a href={`mailto:${el.email}`}>{el.email}</a>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Content;

import type { useState, useEffect } from "react";

const APIKEY =
  "7aeqftKXCz2Te6QLvyBZ-j_39BbUHK0cqzo0zPngJAAMqcI6r4z-VV0IwYx2ziN73E2ToVFKbzjae8E_gtbWTkY39sL30e1GWvyHtQKDKraVsvWBYrBDuTrWUAHCaXYx";

const onPressedLike = () => {};
const onPressedDislike = () => {};
const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Foodie</h1>
        <div className="card">
          <h1 style={{ textAlign: "center" }}>test</h1>
          <div className="buttonContainer">
            <button className="mainButton dislikeButton" onClick={onPressedDislike}>
              dislike
            </button>
            <button className="mainButton likeButton" onClick={onPressedLike}>
              like
            </button>
          </div>
          <input type="text" placeholder="Input city" style={{textAlign: "center"}} />
        </div>
      </div>
    </>
  );
};

export default Home;

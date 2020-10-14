import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css"

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/*header==> background image */}
      <div className="banner_contents">
        {/* title */}
        <h1 className = "banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
        {/* div -> 2 buttons { play, my list} */}
        <div className = "banner_buttons">
            <button className = "banner_button">Play</button>
            <button className = "banner_button">My List</button>
        </div>
        {/* Description */}
        <h1 className = "banner__description">
            {movie?.overview}
        </h1>
      </div>
      <div className = "banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;

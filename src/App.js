import React from "react";
import Row from "./Row";
import Banner from "./Banner"
import requests from "./requests";
import "./App.css";
import Nav from  "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrignals} isLargeRow = {true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumnetries} />
    </div>
  );
}

export default App;

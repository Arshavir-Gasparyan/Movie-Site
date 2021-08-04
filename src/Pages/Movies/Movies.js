import React from "react";
import Movie from "../HomePage/home";
import { useEffect, useState } from "react";
import SearchAppBar from "../../Components/Navbar/NavBar";
import { getMoviesByPage, getMoviesByQuery } from "../../helper/Api";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieName, setMovieName] = useState("");

  const onHandleChange = (el) => {
    setMovieName(el.target.value);
  };

  useEffect(() => {
    if (movieName) {
      getMoviesByQuery(movieName).then((data) => {
        setMovieData(data.results);
      });
    } else {
      getMoviesByPage(1).then((res) => {
        setMovieData(res.results);
      });
    }
  }, [movieName]);

  useEffect(() => {
    getMoviesByPage(1).then((res) => {
      setMovieData(res.results);
    });
  }, []);
  console.log(movieData);
  return (
    <div>
      <SearchAppBar onHandleChange={onHandleChange} movieName={movieName} />
      {movieData.length < 1 ? null : <Movie data={movieData} />}
    </div>
  );
};
export default Movies;

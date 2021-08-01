import Movie from "../movie/movie";
import { useEffect, useState} from "react";

const Movies = () => {
 const [movieData,setMovieData] = useState([])
 
  useEffect(() => {
      const page = 1;
      const url =
      `https://api.themoviedb.org/3/movie/popular?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>{
          setMovieData(data.results)
      });
  }, []);

  return (
    <div>
      {
        movieData.length < 1 ? null : <Movie data={movieData}/>
      }
    </div>
  );
};
export default Movies;

import { Card, Button } from "react-bootstrap";
import styles from "./movie.module.css";

// const  base_img_path = 

const Movie = ({ data }) => {
  console.log(data)
  return (
    <div className={styles.cards}>
      {data.map((movie,index) => {
          return (
      <Card style={{ width: '12rem', margin: '10px',}} key={index}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
             {movie.overview}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
      })}
    </div>
  );
};
export default Movie;

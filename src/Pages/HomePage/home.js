import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import styles from "./movie.module.css";

const Movie = ({ data }) => {
  console.log("data", data);
  const history = useHistory();
  return (
    <div className={styles.cards}>
      {data.map((movie, index) => {
        return (
          <Card
            style={{
              width: "12rem",
              margin: "30px",
              height: "300px",
              position: "relative",
            }}
            key={index}
            onClick={() => history.push(`movie/${movie.id}`)}
          >
            <Card.Img
              style={{ height: "200px" }}
              variant="top"
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            />

            <Card.Body>
              <Card.Title style={{ fontSize: "15px" }}>
                {movie.title}
              </Card.Title>
              {/* <Card.Text>{movie.overview}</Card.Text> */}
              <Button
                style={{ position: "absolute", bottom: "0", right: "30px" }}
                variant="primary"
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default Movie;

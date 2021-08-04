import { Card, Button } from "react-bootstrap";

export default function Favorite(params) {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  console.log(favorites);
  return (
    <>
      {favorites.map((movie, index) => {
        return (
          <Card
            key={index}
            style={{
              width: "12rem",
              margin: "30px",
              height: "300px",
              position: "relative",
            }}
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
    </>
  );
}

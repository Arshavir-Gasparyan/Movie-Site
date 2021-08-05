import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById } from "../../helper/Api";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
  image: {
    width: 200,
    height: 400,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const MovieDetail = () => {
  const classes = useStyles();
  const [currMovie, setCurrMovie] = useState(false);
  const [name, setName] = useState("");
  const [buttonText, setButtonText] = useState("Next");
  const [isFavorite, setIsFavorite] = useState(false);
  console.log("555", currMovie);
  const { id } = useParams();

  const addToFavorite = (text) => {
    setButtonText(text);
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    favorites.push(currMovie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  useEffect(() => {
    getMovieById(id).then((data) => {
      setCurrMovie(data);
      console.log("current movie", data);
      setName(data.production_countries[0].name);
    });
    console.log(name);
  }, [name]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={`https://image.tmdb.org/t/p/w200/${currMovie.poster_path}`}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {currMovie.original_title}
                </Typography>
                <p>{currMovie.overview}</p>
                <h2>Countries</h2>
                <p>{name}</p>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => addToFavorite("newtext")}
                  variant="outlined"
                  color="primary"
                >
                  <Link>{buttonText}</Link>
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default MovieDetail;

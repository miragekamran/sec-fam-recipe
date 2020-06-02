import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 1400,
  },
});

const RecipeCard = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/recipes")
      .then((res) => {
        setRecipes(res.data);
      });
  }, []);

  function deleteRecipe(e, id) {
    e.preventDefault();
    console.log("deleting");
    axiosWithAuth()
      .delete(`/api/recipes/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log("delete error ", err));
    //   .finally(() => window.location.reload());
  }

  const classes = useStyles();

  return (
    <center>
      <Card className={classes.root}>
        <div>
          <CardMedia
            component="img"
            alt="Recipe Photo"
            height="140"
            src={props.photo}
            title="Recipe Photo"
          />
          <CardContent style={{ textAlign: "left" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Source: </strong>
              {props.source}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Ingredients: </strong>
              {props.ingredients}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Instructions: </strong>
              {props.instructions}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Category: </strong>
              {props.category}
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button size="small" variant="contained">
            Share
          </Button>
          <Button size="small" color="primary" variant="contained">
            edit
          </Button>
          <Button
            onClick={(e) => deleteRecipe(e)}
            size="small"
            color="secondary"
            variant="contained"
          >
            delete
          </Button>
        </CardActions>
      </Card>
    </center>
  );
};

export default RecipeCard;

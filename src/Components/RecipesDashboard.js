import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import NavBar from "./NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 1400,
  },
});

function RecipeCard(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/recipes")
      .then((res) => {
        setRecipes(res.data);
      });
  }, []);

  const classes = useStyles();

  return (
    <RecipesContainer>
      <NavBar />
      <h4 style={{ marginTop: "40px", marginBottom: "30px" }}>
        Recipes are read only. To Add or Delete recipes, please sign up.
      </h4>

      <center>
        <Card className={classes.root}>
          <div>
            {recipes
              ? recipes.map((recipe) => (
                  <CardContent key={recipe.id} style={{ textAlign: "left" }}>
                    <CardMedia
                      style={{ borderRadius: "5px" }}
                      component="img"
                      alt="Recipe photo"
                      height="140"
                      src={recipe.photo}
                      title="Recipe photo"
                    />
                    <Typography gutterBottom variant="h5" component="h2">
                      <div className="Styling-CardGroups">
                        <strong></strong>
                        {recipe.title}
                      </div>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <div className="Styling-CardGroups">
                        <strong>Source: </strong>
                        {recipe.source}
                      </div>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <div className="Styling-CardGroups">
                        <strong>Ingredients: </strong>
                        {recipe.ingredients}
                      </div>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <div className="Styling-CardGroups">
                        <strong>Instructions: </strong>
                        {recipe.instructions}
                      </div>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <div className="Styling-CardGroups">
                        <strong>Category: </strong>
                        {recipe.category}
                      </div>
                    </Typography>
                  </CardContent>
                ))
              : "loading"}
          </div>
        </Card>
      </center>
    </RecipesContainer>
  );
}

const RecipesContainer = styled.div`
  position: relative;
`;

export default RecipeCard;

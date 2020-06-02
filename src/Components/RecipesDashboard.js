import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
// import { Button } from "@material-ui/core";
import NavBar from "./NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles({
  root: {
    maxWidth: 1400,
  },
});

function RecipeCard(props) {
  // console.log('friends props: ', props)
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/recipes")
      .then((res) => {
        setRecipes(res.data);
      });
  }, []);

  const StyledH2 = styled.h2`
    margin-left: 5%;
  `;

  const FixImg = styled.img`
    height:80%;
    width:80%
    align-item: center;   
`;

  const StyledH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    color: #00cccc;
    // margin: 0 0 24px;
    margin-left: 2%;
    margin-bottom: 2%;
  `;

  const classes = useStyles();

  return (
    <RecipesContainer>
      <NavBar />
      <StyledH1>Welcome to Visitor Dashboard</StyledH1>
      <StyledH2>You can view recipes!</StyledH2>
      
      <center>
        <Card className={classes.root}>
          <div>
            {recipes
              ? recipes.map((recipe) => (
                  <CardContent key={recipe.id} style={{ textAlign: "left" }}>
                    <CardMedia
                      component="img"
                      alt="Recipe photo here"
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
                        <strong>Source:</strong>
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

const RecipeContainer = styled.div`
  padding: 15px;
  margin: 15px;
  background-color: smokewhite;
  border: black 1px solid;
  text-align: center;
`;

export default RecipeCard;

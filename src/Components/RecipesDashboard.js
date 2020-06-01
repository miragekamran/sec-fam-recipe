import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
// import { Button } from "@material-ui/core";
import NavBar from "./NavBar";

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

  const StyledH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    color: #00cccc;
    // margin: 0 0 24px;
    margin-left: 2%;
    margin-bottom: 2%;
  `;

  return (
    <RecipesContainer>
      <NavBar />
      <StyledH1>Welcome to your Dashboard</StyledH1>
      <StyledH2>You can view recipes!</StyledH2>
      {recipes
        ? recipes.map((recipe) => (
            <RecipeContainer key={recipe.id}>
              <p>
                {recipe.title}
                <br />
                {recipe.source}
                <br />
                {recipe.ingredients}
                <br />
                {recipe.instructions}
                <br />
                {recipe.category}
              </p>
            </RecipeContainer>
          ))
        : "loading"}
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

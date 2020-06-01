import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import { Button } from "@material-ui/core";

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

  function deleteRecipe(e, id) {
    e.preventDefault();
    console.log("deleting");
    axiosWithAuth()
      .delete(`/api/recipes/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log("delete error ", err));
    //   .finally(() => window.location.reload());
  }

  return (
    <RecipesContainer>
      <h2>Your Recipes</h2>
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
              <Button
                onClick={(e) => deleteRecipe(e, recipe.id)}
                variant="contained"
                color="primary"
              >
                delete
              </Button>
            </RecipeContainer>
          ))
        : "loading"}
    </RecipesContainer>
  );
}

const RecipesContainer = styled.div`
  position: relative;
  top: 20px;
`;

const RecipeContainer = styled.div`
  padding: 15px;
  margin: 15px;
  background-color: smokewhite;
  border: black 1px solid;
  text-align: center;
`;

export default RecipeCard;

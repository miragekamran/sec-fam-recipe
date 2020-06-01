import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button } from "@material-ui/core";

const FixImg = styled.img`
    height:80%;
    width:80%
    align-item: center;   
`;
const CardDiv = styled.div`
  color: #20c8dd;
  border: 2px dotted #f4f7f6;
  width: 75%;
  height: 75%;
  padding: 3%;
  margin: 4%;
`;

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

  return (
    <CardDiv className="recipecard">
      <h2>{props.title}</h2>

      <p>Ingredients: {props.ingredient}</p>
      <p>Instructions: {props.instructions}</p>
      <p>Source: {props.source}</p>
      <p>Category: {props.category}</p>
      <Button
        onClick={(e) => deleteRecipe(e)}
        variant="contained"
        color="primary"
      >
        delete
      </Button>
      <FixImg alt="food" src={props.photo} />
    </CardDiv>
  );
};
//also add delete button
export default RecipeCard;


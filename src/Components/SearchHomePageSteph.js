import React, { useState, useEffect } from "react";

import axios from "axios";

import SearchForm from "./SearchFormSteph";

import styled from "styled-components";
import RecipeCard from "./RecipeCardSteph";

const Heading = styled.h1`
  color: #ac3e59;
`;

function HomePage() {
  //KEEP
  const [recetas, setRecetas] = useState([]);

  const [search, setSearch] = useState("");

  // KEEP
  useEffect(() => {
    axios
      .get("https://back-end-build-weeks.herokuapp.com/api/recipes")
      .then((response) => {
        console.log(response.data);
        setRecetas(response.data);
      });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const result = recetas.filter((receta) => {
    return receta.title.toLowerCase().includes(search);
  });

  return (
    <div>
      <center>
        <Heading>Search Recipes</Heading>
      </center>

      <center>
        <SearchForm value={search} onChange={handleChange} />
      </center>
      {result.map((props) => {
        return (
          <RecipeCard
            title={props.title}
            ingredients={props.ingredient}
            instructions={props.instructions}
            source={props.source}
            category={props.category}
            photo={props.photo}
          />
        );
      })}
    </div>
  );
}

export default HomePage;


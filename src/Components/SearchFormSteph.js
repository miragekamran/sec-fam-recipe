import React from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  background-color: light gray;
  text: #20c8dd;
  padding: 0.2%;
`;

const SearchForm = (props) => {
  return (
    <section style={{margin:'20px'}}>
      <SearchBar
        value={props.value}
        placeholder="Search Recipes"
        onChange={props.onChange}
      />
    </section>
  );
};

export default SearchForm;

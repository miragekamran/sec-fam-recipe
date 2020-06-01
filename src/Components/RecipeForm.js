import React, { Component } from "react";
import "../index.css";
// import api from "../utils/api";
import NavBar from "./NavBar";
import axios from "axios";

export default class RecipeForm extends Component {
  state = {
    newRecipe: {
      title: "",
      source: "",
      ingredients: "",
      instructions: "",
      category: "",
      photo: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      newRecipe: {
        ...this.state.newRecipe,
        [e.target.name]: e.target.value,
      },
    });
  };

  addRecipe = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://back-end-build-weeks.herokuapp.com/api/recipes",
        this.state.newRecipe
      )
      .then((res) => {
        console.log("Res is: ", res);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.log("Error is: ", err.response));
  };

  render() {
    return (
      <div>
        <NavBar />
        <form onSubmit={this.addRecipe}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.newRecipe.title}
            onChange={this.handleChange}
          />
          <div />
          <input
            type="text"
            name="source"
            placeholder="Source"
            value={this.state.newRecipe.source}
            onChange={this.handleChange}
          />
          <div />
          <input
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            value={this.state.newRecipe.ingredients}
            onChange={this.handleChange}
          />
          <div />
          <input
            type="text"
            name="instructions"
            placeholder="Instructions"
            value={this.state.newRecipe.instructions}
            onChange={this.handleChange}
          />
          <div />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={this.state.newRecipe.category}
            onChange={this.handleChange}
          />
          <div />
          <input
            type="text"
            name="photo"
            placeholder="Photo"
            value={this.state.newRecipe.photo}
            onChange={this.handleChange}
          />
          <div />
          <button type="submit">Add Recipe</button>
        </form>
      </div>
    );
  }
}

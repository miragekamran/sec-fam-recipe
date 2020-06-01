import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeList from "./RecipeList";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="button-box">
        <Link to="/recipeform">
          <button className="dash-button">Add A New Recipe</button>
        </Link>
      </div>
      <RecipeList />
    </>
  );
};

export default Dashboard;

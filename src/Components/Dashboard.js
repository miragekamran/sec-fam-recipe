import React from "react";
import NavBar from "./NavBar";
import "../index.css";
import { Link } from "react-router-dom";
import RecipeList from "./RecipeList";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div
        className="button-box"
        style={{ marginTop: "50px", marginBottom: "15px" }}
      >
        <Link to="/recipeform">
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Add A New Recipe
          </Button>
        </Link>
      </div>
      <RecipeList />
    </>
  );
};

export default Dashboard;

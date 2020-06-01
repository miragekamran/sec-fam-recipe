import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";
import logo from "../images/recipe.png";
import { getToken } from "../utils/axiosWithAuth";

const NavDiv = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  margin-left: 15%;
`;
const LogoDiv = styled.div`
  display: flex;
`;
const BottonsDiv = styled.div`
  margin-top: 5%;
`;

export default function NavBar(props) {
  const signedIn = getToken();
  // const id = localStorage.getItem('id');
  return (
    <div>
      <NavDiv>
        <LogoDiv>
          <img className="navImage" src={logo} alt="logo" />
          <h4>
            Secret Family <br></br> Recipes!
          </h4>
        </LogoDiv>
        <BottonsDiv>
          <Button color="secondary">
            <Link to="/" className="NavButtons">
              Home
            </Link>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button color="secondary">
            <Link to="/recipeDashboard" className="NavButtons">
              Visitor Dashboard
            </Link>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button color="secondary">
            <Link to="/dashboard" className="NavButtons">
              User Dashboard
            </Link>
          </Button>
          &nbsp;&nbsp;&nbsp;
          {!signedIn && (
            <Button color="secondary">
              <Link to="/login" className="NavButtons">
                Login
              </Link>
            </Button>
          )}
          &nbsp;&nbsp;&nbsp;
          {!signedIn && (
            <Button color="info">
              <Link to="/signUp" className="NavButtons">
                Sign Up
              </Link>
            </Button>
          )}
          {signedIn && (
            <Button color="info">
              <Link to="/logout" className="NavButtons">
                LogOut
              </Link>
            </Button>
          )}
          &nbsp;&nbsp;&nbsp;
        </BottonsDiv>
      </NavDiv>
      <hr></hr>
    </div>
  );
}

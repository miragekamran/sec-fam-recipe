import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";
import logo from "../images/recipe.png";
import { getToken } from "../utils/axiosWithAuth";
// import HomePageSteph from './HomePageSteph';

const NavDiv = styled.div`
  margin-top: 2%;
  // display: flex;
  justify-content: space-between;
  // margin-left: 15%;
`;
const LogoDiv = styled.div`
  // display: flex;
`;
const BottonsDiv = styled.div`
  margin-top: 1%;
  margin-bottom: 3%;
`;

export default function NavBar() {
  const signedIn = getToken();
  // const id = localStorage.getItem('id');
  return (
    <div>
      <NavDiv>
        <LogoDiv>
          <img className="navImage" src={logo} alt="logo" />
          <h4 style={{ marginLeft: "10px" }}>
            Secret <br></br> Family <br></br> Recipes!
          </h4>
        </LogoDiv>
        <BottonsDiv>
          <Link to="/" className="NavButtons">
            <Button color="secondary" size="small">
              Home
            </Button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Button color="secondary" size="small">
            <a
              href="https://marketing-page.netlify.app/"
              className="NavButtons"
            >
              {" "}
              Marketing
            </a>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Link to="/recipeDashboard" className="NavButtons">
            <Button color="secondary" size="small">
              Visitor Dashboard
            </Button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/dashboard" className="NavButtons">
            <Button color="secondary" size="small">
              User Dashboard
            </Button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          {!signedIn && (
            <Link to="/login" className="NavButtons">
              <Button color="secondary" size="small">
                Login
              </Button>
            </Link>
          )}
          &nbsp;&nbsp;&nbsp;
          {!signedIn && (
            <Link to="/signUp" className="NavButtons">
              <Button color="info" size="small">
                Sign Up
              </Button>
            </Link>
          )}
          {signedIn && (
            <Link to="/logout" className="NavButtons">
              <Button color="info" size="small">
                LogOut
              </Button>
            </Link>
          )}
          &nbsp;&nbsp;&nbsp;
        </BottonsDiv>
      </NavDiv>
      <hr></hr>
    </div>
  );
}

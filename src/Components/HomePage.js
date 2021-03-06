import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Carousel from "./Carousel";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const SignUpDiv = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  margin-top: 10%;
  margin-left: 14%;
`;
const FooterDiv = styled.footer`
  background-color: #d3d3d3;
  margin-top: 10%;
  margin-bottom: 0.5%;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <h1 style={{marginBottom:'2%', marginTop:'2%'}}>Welcome to Secret Family Recipies !</h1>
      <Carousel />
      <SignUpDiv>
        <div>
          <Card className="joseScard1">
            <CardImg
              src="https://images.unsplash.com/photo-1554136536-f25c5f8b2a40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=40"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>Families:</strong>
              </CardTitle>
              <CardText>
                Families can view all posted recipes, and filter by title,
                category, and as well as choose their favorite ones!
              </CardText>
              <Link to="/signUp" className="NavButtons">
                <Button className="joseSbuttonCard" color="info">
                  Sign Up
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="joseScard2">
            <CardImg
              src="https://images.unsplash.com/photo-1569921894261-ecda0b2cc1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1470&q=60"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>Restaurants:</strong>
              </CardTitle>
              <CardText>
                Sign up to list, edit, and update your recipes anywhere and
                anytime!.
              </CardText>
              <Link to="/signUp" className="NavButtons">
                <Button className="joseSbuttonCard" color="info">
                  Sign Up
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </SignUpDiv>
      <FooterDiv>
        <p>
          11 SE. Wentworth St.<br></br>Wonderland,Forever 01156
        </p>
      </FooterDiv>
    </div>
  );
}


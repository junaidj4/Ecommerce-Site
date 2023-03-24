import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import "./HeroSection.css";
import pic from "../images/pana.png";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="hero-section-data">
          <div className="intro-section">
            <h1>Professional React Native Themes for your project</h1>
            <p>
              Select one from the following categories or Use the search bar
            </p>
            <NavLink>
              <Button>Ecommerce</Button>
              <Button>Professional</Button>
              <Button>Social Media</Button>
              <Button>Blogs</Button>
              <Button>Technology</Button>
            </NavLink>
          </div>
          <div className="image-section">
            <img src={pic} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default HeroSection;

import React from "react";
import styled from "styled-components";
import "./Featured.css";
import { Button3 } from "./Button3";
import ProductAd from "./ProductAd";

const Featured = () => {
  return (
    <Wrapper>
      <div className="featured-section">
        <div className="heading">
          <h1>Featured Templates</h1>
          <p>New Templates from the collection </p>
        </div>

        <div className="grid">
          <ProductAd />
          <ProductAd />
          <ProductAd />
          <ProductAd />
          <ProductAd />
          <ProductAd />
          <ProductAd />
          <ProductAd />
          <ProductAd />
        </div>
        <Button3 className="end-button">View More</Button3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Featured;

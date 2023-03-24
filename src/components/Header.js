import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "./CartIcon";
import Nav from "./Nav";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <MainHeader>
      <div className="Leftside">
        <NavLink to="/">
          <img src="./images/logo.png" alt="my logo img" />
        </NavLink>
        <Nav />
      </div>

      <div className="Rightside">
        <div className="upside">
          <Searchbar />
          <CartIcon />
          <p>Login / Sign Up</p>
        </div>
        <div className="downside">
          <p>
            Need Help?
            <a>
              <span class="gradient-text">Get in touch</span>
            </a>
          </p>
        </div>
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">  
padding: 0 4.8rem;
  height: 16rem;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  justify-content: space-evenly;
  .logo {
    height: 5rem;
  }
.Leftside{
  display:flex;
  flex-direction:column;
}

.Leftside img{
  margin-bottom:30px;
}
  .upside {
    display: flex;
    justify-content:center;
    align-items:center;
    margin-bottom:34px;
  }
  .upside p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: "Urbanist";
    font-weight:700;
    justify-content:right;
    cursor:pointer;
  }
  .downside{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .downside p{
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:right;
    font-family: "Urbanist";
    font-weight:700;
  }
    
  .downside span{
    cursor: pointer;
    margin-left:5px;
    font-family: "Urbanist";
    font-weight:700;
  }
  .gradient-text {
    /* Fallback: Set a background color. */
    background-color: red;
    
    /* Create the gradient. */
    background-image: linear-gradient(45deg, #7800FC, #B500E5);
    
    /* Set the background size and repeat properties. */
    background-size: 100%;
    background-repeat: repeat;
  
    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;
export default Header;

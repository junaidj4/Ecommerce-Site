import React, { useEffect } from "react";
import "./LoginModal.css";
import pic from "../images/flat-color-icons_google.png";
import pic1 from "../images/ic_baseline-apple.png";
import pic2 from "../images/logos_facebook.png";
import { NavLink } from "react-router-dom";

function LoginModal({ setOpenLoginModal }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div className="modalBackground"></div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenLoginModal(false);
            }}
          >
            X
          </button>
        </div>
        <form className="login-form" noValidate="novalidate">
          <div className="form-group">
            <p id="field-text">Username/Email</p>
            <input
              id="sign-up-input"
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              required=""
              autoComplete="off"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <p id="field-text">Password</p>
            <input
              id="sign-up-input"
              className="form-control"
              type="password"
              name="pass"
              placeholder="Password"
              required=""
              autoComplete="off"
              aria-required="true"
            />
          </div>

          <div className="footer">
            <button id="login-button">Log In</button>
            <span>Or Continue with</span>
            <div className="social-btns">
              <img id="google-icon" src={pic} />

              <img id="apple-icon" src={pic1} />

              <img id="fb-icon" src={pic2} />
            </div>
            <div className="last-line">
              <span>Don't have an account? </span>
              {/* <NavLink to="/signup" className="navbar-link login--link"> */}
              <span id="sign-up-link">Sign Up</span>
              {/* </NavLink> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginModal;

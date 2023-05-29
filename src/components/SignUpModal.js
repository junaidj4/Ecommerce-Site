import React from "react";
import "./SignUpModal.css";
import pic from "../images/flat-color-icons_google.png";
import pic1 from "../images/ic_baseline-apple.png";
import pic2 from "../images/logos_facebook.png";
import { NavLink } from "react-router-dom";

function SignUpModal({ setOpenModal }) {
  return (
    <>
      <div className="modalBackground"></div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <form className="signup-form" noValidate="novalidate">
          <div className="form-group">
            <p id="field-text">Name</p>
            <input
              id="sign-up-input"
              className="form-control"
              type="text"
              name="name"
              placeholder="Full Name"
              required=""
              autoComplete="off"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <p id="field-text">Email/Username</p>
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
          <div className="form-group">
            <p id="field-text">Confirm Password</p>
            <input
              id="sign-up-input"
              className="form-control"
              type="password"
              name="pass"
              placeholder="Confirm Password"
              required=""
              autoComplete="off"
              aria-required="true"
            />
          </div>

          <div className="footer">
            <button id="signup-button">Sign Up</button>
            <span>Or Sign Up with</span>
            <div className="social-btns">
              <img id="google-icon" src={pic} />

              <img id="apple-icon" src={pic1} />

              <img id="fb-icon" src={pic2} />
            </div>
            <div className="last-line">
              <span>Already have an account? </span>
              {/* <NavLink to="/login" className="navbar-link login--link"> */}
              <span id="sign-up-link">Log In</span>
              {/* </NavLink> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpModal;

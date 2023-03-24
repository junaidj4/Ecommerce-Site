import React from "react";
import "./CartIcon.css";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const CartIcon = () => {
  return (
    <div>
      <NavLink to="/cart" className="navbar-link cart-trolley--link">
        <FiShoppingCart className="cart-trolley" />
        <span className="cart-total--item"> 5 </span>
      </NavLink>
    </div>
  );
};

export default CartIcon;

import React, { useState, useContext, useRef } from 'react';
import './Navbar.css';

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/nav_dropdown.png";

import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
  };


  const totalItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className='navbar'>
      {/* Logo */}
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>Sami Live Fashion</p>
      </div>

      <div className="nav-dropdown" onClick={dropdown_toggle}>
        <img src={nav_dropdown} alt="menu" />
        <span className="nav-dropdown-text">Menu</span>
      </div>

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr className='shop' /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/mens">Men</Link>
          {menu === "men" ? <hr className='shop' /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/womens">Women</Link>
          {menu === "women" ? <hr className='shop' /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr className='shop' /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <div style={{ position: "relative" }}>
            <img src={cart_icon} alt="cart" />
            <div className="nav-card-count">{totalItems}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

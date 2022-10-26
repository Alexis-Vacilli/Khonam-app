import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link href="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="navbar-links">
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/">About</Link>
        </p>
        <p>
          <Link href="/">Contact</Link>
        </p>
        <button type="button" className="cart-icon" onClick="">
          <AiOutlineShopping />
          <span className="cart-item-qty">1</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

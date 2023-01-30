import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const { amount } = useSelector((state) => state.basket);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__right">
        <div className="header__option">
          <span>Hello sign in</span>
          <h4>Account & Lists</h4>
        </div>

        <div className="header__option">
          <span>Return </span>
          <h4>& Orders</h4>
        </div>

        <div className="header__basketAmount">
          <Link to="/checkOut">
            <ShoppingCartOutlinedIcon fontSize="large" className="basketIcon" />
          </Link>
          <span>Cart</span>
          <span className="amount">{amount}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

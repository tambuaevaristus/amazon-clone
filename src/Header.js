import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />

      </div>

      <div className="header__nav">
        
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLinetwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLinetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLinetwo">Primes</span>
        </div>
        <div className="header__optionBasket">
            <ShoppingBasketIcon className=""/>
        <span className="header__optionLinetwo header__basketCount">0</span>

        </div>
      </div>
    </div>
  );
}

export default Header;

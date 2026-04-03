import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router';
import logoWhite from '../assets/images/logo-white.png';
import mobileLogoWhite from '../assets/images/mobile-logo-white.png';
import searchIcon from '../assets/images/icons/search-icon.png';
import cartIcon from '../assets/images/icons/cart-icon.png';
import './Header.css';

function Header({ cart }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search') || '';
  const [searchInput, setSearchInput] = useState(searchText || '');

  useEffect(() => {
    setSearchInput(searchText);
  }, [searchText]);

  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  const updateSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const search = () => {
    navigate(`/?search=${searchInput}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
    } else if (event.key === 'Escape') {
      setSearchInput('');
    }
  };

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" data-testid="header-logo" src={logoWhite} />
          <img className="mobile-logo" data-testid="header-mobile-logo" src={mobileLogoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          data-testid="header-search-bar"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={updateSearchInput}
          onKeyDown={handleKeyDown}
        />

        <button className="search-button" onClick={search}>
          <img className="search-icon" data-testid="header-search-button" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" data-testid="header-orders-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" data-testid="header-cart-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;

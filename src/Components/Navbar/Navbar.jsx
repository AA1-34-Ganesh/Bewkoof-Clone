import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/User/userSlice';
import './Navbar.css';
import { menuData } from './MenuData';

const MenuColumn = ({ section, baseUrl }) => {
  return (
    <div className="menu-column">
      <h4 className="column-heading">{section.heading}</h4>
      <ul className="column-list">
        {section.items.map((item, index) => {
          const slug = item.toLowerCase().replace(/ /g, '-');
          return (
            <li key={index}>
              <Link to={`${baseUrl}/${slug}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const { totalItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="navbar-wrapper">
      <div className="top-bar">
        <div className="top-bar-content">
          <span>Offers</span>
          <span>Fanbook</span>
          <span>Download App</span>
          <span>TriBe Membership</span>
        </div>
      </div>

      <nav className="main-navbar">
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          <span>☰</span>
        </div>

        <div className="logo-section">
          <Link to="/">
            <img src="/logo.png" alt="Bewakoof" className="logo-img" />
          </Link>
        </div>
        <div className="nav-links">

          <div className="nav-item">
            <Link to="/men" className="nav-link">MEN</Link>
            <div className="mega-menu">
              <div className="mega-menu-content">
                {menuData.men.map((section, index) => (
                  <MenuColumn key={index} section={section} baseUrl="/men" />
                ))}
              </div>
            </div>
          </div>

          <div className="nav-item">
            <Link to="/women" className="nav-link">WOMEN</Link>
            <div className="mega-menu">
              <div className="mega-menu-content">
                {menuData.women.map((section, index) => (
                  <MenuColumn key={index} section={section} baseUrl="/women" />
                ))}
              </div>
            </div>
          </div>

          <div className="nav-item">
            <Link to="/mobile-covers" className="nav-link">MOBILE COVERS</Link>
            <div className="mega-menu">
              <div className="mega-menu-content mobile-covers-grid">
                {menuData.mobileCovers.map((section, index) => (
                  <MenuColumn key={index} section={section} baseUrl="/mobile-covers" />
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="search-section">
          <form className="search-box" onSubmit={handleSearch}>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by product, category or collection"
              value={searchQuery}
              onChange={handleSearchInput}
            />
          </form>
        </div>

        <div className="action-icons">
          <div className="action-item desktop-only">
            <Link to="/orders" className="action-link">My Orders</Link>
          </div>
          <div className="action-item desktop-only">
            {isAuthenticated ? (
              <span onClick={handleLogout} className="action-link" style={{ cursor: 'pointer' }}>Logout</span>
            ) : (
              <Link to="/login" className="action-link">Login</Link>
            )}
          </div>
          <div className="action-item">
            <Link to="/wishlist" className="action-link">
              <span className="icon">♡</span>
              {wishlistItems.length > 0 && <span className="badge">{wishlistItems.length}</span>}
            </Link>
          </div>
          <div className="action-item">
            <Link to="/cart" className="action-link">
              <span className="icon">🛍️</span>
              {totalItems > 0 && <span className="badge">{totalItems}</span>}
            </Link>
          </div>

        </div>
      </nav>

      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button className="close-menu-btn" onClick={toggleMobileMenu}>✕</button>
        </div>
        <div className="mobile-menu-links">
          <Link to="/men" onClick={toggleMobileMenu}>MEN</Link>
          <Link to="/women" onClick={toggleMobileMenu}>WOMEN</Link>
          <Link to="/mobile-covers" onClick={toggleMobileMenu}>MOBILE COVERS</Link>
          <hr />
          {isAuthenticated ? (
            <span onClick={handleLogout} className="mobile-link">Logout</span>
          ) : (
            <Link to="/login" onClick={toggleMobileMenu} className="mobile-link">Login</Link>
          )}
          <Link to="/orders" onClick={toggleMobileMenu} className="mobile-link">My Orders</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
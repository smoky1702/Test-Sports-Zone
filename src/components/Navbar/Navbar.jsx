import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/sports-zone-logo.png';
import { FaFacebook, FaTwitter, FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Sports Zone Logo" />
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/gioi-thieu">Giới thiệu</a></li>
            <li><a href="/su-kien">Sự kiện</a></li>
            <li><a href="/hang-ve-online">Hàng vé online</a></li>
            <li><a href="/tin-tuc">Tin tức</a></li>
            <li><a href="/lien-he">Liên hệ</a></li>
          </ul>
        </div>
        
        <div className="navbar-actions">
          <div className="search-icon">
            <FaSearch />
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
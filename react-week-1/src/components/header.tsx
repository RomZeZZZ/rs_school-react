import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Header() {
  const [currentPage, setCurrentPage] = useState('Home');
  return (
    <header className="header">
      <div className="header_container">
        <div className="current_page">{currentPage}</div>
        <nav className="header_nav">
          <ul className="header_nav_list">
            <li>
              <Link onClick={() => setCurrentPage('Home')} className="header_nav_list_link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setCurrentPage('About Us')}
                className="header_nav_list_link"
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setCurrentPage('Sign Up')}
                className="header_nav_list_link"
                to="/sign-up"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;

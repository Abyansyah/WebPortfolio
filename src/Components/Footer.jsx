import React from 'react';
import '../Css/Footer.css';
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrapper">
          <h1>Ahmad Abyansyah</h1>
          <ul className="footer-menu">
            <li className='footer-item'>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Home</NavLink>
            </li>
            <li className='footer-item'>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>About</NavLink>
            </li>
            <li className='footer-item'>
              <NavLink to="/karya" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Karya</NavLink>
            </li>
            <li className='footer-item'>
              <NavLink to="/kontak" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Kontak</NavLink>
            </li>
          </ul>
          <ul className="list-footer">
            <li className="icon-item">
              <Link>
                <i class="fa fa-twitter"></i>
              </Link>
            </li>
            <li className="icon-item">
              <Link>
                <i class="fa fa-instagram"></i>
              </Link>
            </li>
            <li className="icon-item">
              <Link>
                <i class="fa fa-facebook"></i>
              </Link>
            </li>
          </ul>
          <div className="copyright container">
            <p>&copy; Copyright 2023 Ahmad. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

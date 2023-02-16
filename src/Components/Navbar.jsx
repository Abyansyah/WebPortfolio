import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toogleNav = () => {
    setShowMenu(!showMenu)
  }

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <a href="/">
          {' '}
          <h1>
            Ahmad<span className="dot">.</span>
          </h1>{' '}
        </a>

        <div className={showMenu ? 'menu mobile-menu' : 'menu'}>
          <ul>
            <i class="fa-solid fa-xmark" onClick={toogleNav}></i>
            <li className="first">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>About</NavLink>
            </li>
            <li>
              <NavLink to="/karya" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Karya</NavLink>
            </li>
            <li>
              <NavLink to="/kontak" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Kontak</NavLink>
            </li>
          </ul>
        </div>
        <i class="fa-solid fa-bars" onClick={toogleNav}></i>

        <div className={showMenu ? 'over actived' : 'over'}></div>
      </nav>
    </>
  );
}

export default Navbar;

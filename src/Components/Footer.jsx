import React from 'react';
import '../Css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrapper">
          <h1>Ahmad Abyansyah</h1>
          <ul className="footer-menu">
            <li className='footer-item'>
              <Link>Home</Link>
            </li>
            <li className='footer-item'>
              <Link>About</Link>
            </li>
            <li className='footer-item'>
              <Link>Karya</Link>
            </li>
            <li className='footer-item'>
              <Link>Kontak</Link>
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

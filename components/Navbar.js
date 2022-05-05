import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link href="/">
          <a> Learn2Code </a>
        </Link>
      </div>
      <div className="nav_menu">
        <ul className="nav_ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
      <div className="mobile_menu">
        <div className="mobile_menu_icon">
          {/* <i className="fas fa-bars">menu</i> */}
          <a className='mobile_apply'>apply now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import './header.css'

function Header() {
  return <header className="header_bar">
    <h3 className="name">Joyal Shine</h3>
    <nav className="nav_links">
      <ul className="nav_link_list">
        <li className="nav_link">
          <a href="">
            Home
          </a>
        </li>
        <li className="nav_link">
          <a href="">
            About
          </a>
        </li>
        <li className="nav_link">
          <a href="">
            Projects
          </a>
        </li>
        <li className="nav_link">
          <a href="">
            Conatcts
          </a>
        </li>
      </ul>
    </nav>
  </header>;
}

export default Header;

import React, { useState } from "react";
import './header.css'

function Header() {
  const [navBar, setNavBar] = useState("mobile-nav closed-menu")
  function openNav(){
    setNavBar("mobile-nav")
  }
  function closeNav(){
    setNavBar("mobile-nav closed-menu")
  }
  return <header className="header_bar">
    <h3 className="name">Joyal Shine</h3>
    <nav className="nav_links">
      <ul className="nav_link_list">
        <li className="nav_link">
          <a href="#">
            Home
          </a>
        </li>
        <li className="nav_link">
          <a href="#about">
            About
          </a>
        </li>
        <li className="nav_link">
          <a href="#projects">
            Projects
          </a>
        </li>
        <li className="nav_link">
          <a href="#contact">
            Conatcts
          </a>
        </li>
        <li className="nav_link mobile-nav-div">
          <i class="fa-solid fa-bars-staggered" id="mobile-nav-btn" onClick={openNav}></i>
        </li>
      </ul>
    </nav>
    <div class={navBar} bis_skin_checked="1">
      <span>
        <i class="fa-solid fa-xmark"  onClick={closeNav}></i>
      </span>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </header>;
}

export default Header;

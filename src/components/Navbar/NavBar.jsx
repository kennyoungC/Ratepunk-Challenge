import React, { useState } from "react"
import "../Styles/Navbar.css"
import logo from "../../assets/logo.svg"
import hamburgerMenu from "../../assets/menu.svg"
import closeMenu from "../../assets/close.svg"
const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="cont border">
      <div className="navbar">
        <div className="desktop-navbar">
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* menu */}

          <ul className="navlist">
            <li>
              <a href="/">Chrome Extension</a>
            </li>
            <li>
              <a href="/">Price Comparison</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-navbar">
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* Hamburger Menu */}
          <div onClick={handleClick} className="menu-icon">
            {!nav ? (
              <img src={hamburgerMenu} alt="menu icon" />
            ) : (
              <img src={closeMenu} alt="close icon" />
            )}
          </div>
          {nav && (
            <ul className="navlist-mobile">
              <li>
                <a href="/">Chrome mobile Extension</a>
              </li>
              <li>
                <a href="/">Price Comparison</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar

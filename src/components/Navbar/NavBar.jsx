import React from "react"
import "../Styles/Navbar.css"
import logo from "../../assets/logo.svg"
const NavBar = () => {
  return (
    <div className="navbar container">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
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
      </nav>
    </div>
  )
}

export default NavBar

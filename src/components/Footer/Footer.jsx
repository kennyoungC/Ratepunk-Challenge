import React from "react"
import "../Styles/Footer.css"
import logo from "../../assets/logo.svg"
import email from "../../assets/email.svg"
import linkedIn from "../../assets/linkedin.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"
import tiktok from "../../assets/tiktok.svg"
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container ">
        <div className="footer">
          <div>
            <img src={logo} alt="logo icon" />
            <p>
              Ratepunk compares hotel room prices across the major online travel
              agencies. when you search for a room, Ratepunk extension scans the
              top booking sites and runs a price comparison, so you can be
              confident in knowing you're getting the best deal!
            </p>
            <p>&copy; 2021 Ratepunk. All Rights Reserved.</p>
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <a href="/">Price comparison</a>
              </li>
              <li>
                <a href="/">Chrome Extension</a>
              </li>
              <li>
                <a href="/">How It Works</a>
              </li>
              <li>
                <a href="/">Ratepunk Blog</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="contact-box">
              <h4>CONTACT</h4>
              <div>
                <img src={email} alt="" />
                <p>
                  <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
                </p>
              </div>
            </div>
            <div className="social-box">
              <h4>SOCIAL</h4>
              <div>
                <div>
                  {" "}
                  <img src={instagram} alt="instagram icon" />
                </div>
                <div>
                  <img src={facebook} alt="facebook icon" />
                </div>
                <div>
                  <img src={linkedIn} alt="linkedIn icon" />
                </div>
                <div>
                  {" "}
                  <img src={twitter} alt="twitter icon" />
                </div>
                <div>
                  <img src={tiktok} alt="tiktok icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

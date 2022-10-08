import React from "react"
import "../Styles/Advert.css"
import chrome from "../../assets/chrome.svg"
import apple from "../../assets/apple.svg"
import star from "../../assets/star.svg"
const Advert = () => {
  return (
    <div className="section-2">
      <div className="container">
        <div className="ad-container">
          <div>
            <img src={chrome} alt="chrome icon" />
            <p>
              available in the <strong>chrome web store</strong>
            </p>
          </div>
          <div>
            <img src={apple} alt="apple icon" />
            <p>
              available in the <strong>apple web store</strong>
            </p>
          </div>
          <div>
            <div>
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
            </div>
            <p>Chrome Store reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advert

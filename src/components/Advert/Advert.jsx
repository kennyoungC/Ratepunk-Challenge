import React from "react"
import "../Styles/Advert.css"
import chrome from "../../assets/chrome.svg"
import apple from "../../assets/apple.svg"
import star from "../../assets/star.svg"
const Advert = () => {
  return (
    <div className="section-2">
      <div className="cont">
        <div className="ad-container">
          <a href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">
            <div>
              <img src={chrome} alt="chrome icon" />
              <p>
                available in the <br />
                <strong>chrome web store</strong>
              </p>
            </div>
          </a>
          <a href="https://apps.apple.com/app/ratepunk/id1607823726">
            <div>
              <img src={apple} alt="apple icon" />
              <p>
                available in the <br />
                <strong>apple web store</strong>
              </p>
            </div>
          </a>
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

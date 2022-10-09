import React, { useState } from "react"
import "../Styles/Mainpage.css"
import checked from "../../assets/success.svg"
import invite from "../../assets/invite.svg"
import collectCoins from "../../assets/collect-coins.svg"
import voucher from "../../assets/voucher.svg"
const Mainpage = () => {
  const [email, setEmail] = useState("")
  const [emailIsValid, setEmialIsValid] = useState(true)
  const [showReferral, setShowReferral] = useState(false)
  const [copySuccess, setCopySuccess] = useState("")
  const handleInput = (e) => {
    const val = e.target.value
    setEmialIsValid(true)
    setEmail(val)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email.trim() === "" || !email.includes("@")) {
      setEmialIsValid(false)
      return
    }
    try {
      const resp = await fetch("https://api.jsonbin.io/v3/b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key":
            "$2b$10$58TtTmKocwavUXd3jEDQhuJopyl0Tx5uGK9iiqbPBPdABE01.jfeq",
          "X-Bin-Name": "Emails",
        },
        body: JSON.stringify({ email }),
      })
      if (resp.ok) {
        setShowReferral(true)
        setEmail("")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="section-1">
      <div className="cont">
        <div className="mainpage_section">
          <div className="first_row">
            <h1>refer friends and get rewards</h1>
            <p>
              Refer your friends to us and earn hotel booking vouchers. We'll
              give you 1 coin for each friend that installs our extension.
              Minimum cash-out at 20 coins.
            </p>
            {showReferral && (
              <div className="form-container ">
                <div>
                  <img src={checked} alt="check-" />
                  <p>Your email is confirmed!</p>
                </div>
                <div className="mobile-confirm-section">
                  <input
                    placeholder="https://ratepunk.com/referral"
                    type="text"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "https://ratepunk.com/referral"
                      )
                      setCopySuccess("Copied!")
                    }}
                  >
                    {copySuccess ? copySuccess : "Copy URL"}
                  </button>
                </div>
                <div className="desktop-confirm-section">
                  <input
                    placeholder="https://ratepunk.com/referral"
                    type="text"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "https://ratepunk.com/referral"
                      )
                      setCopySuccess("Copied!")
                    }}
                  >
                    {copySuccess ? copySuccess : "copy"}
                  </button>
                </div>
              </div>
            )}
            {!showReferral && (
              <div className="form-container-2">
                {!emailIsValid && <p>Error State</p>}
                <div className="form-control">
                  <input
                    onChange={handleInput}
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <button onClick={handleSubmit}>Get Referral Link</button>
              </div>
            )}
            <p>Limits on max rewards apply.</p>
          </div>
          <div className="second_row">
            <div className="img-box">
              <img src={invite} alt="" />
            </div>
            <div className="step-box">
              <h3>STEP 1</h3>
              <h5>INVITE FRIENDS</h5>
              <p>Refer friends with your unique referral link.</p>
            </div>

            <div className="step-box">
              <h3>STEP 2</h3>
              <h5>COLLECT COINS</h5>
              <div>
                <p>
                  Get 1 coin for each friend that installs our extension using
                  your referral link.
                </p>
              </div>
            </div>
            <div className="img-box">
              {" "}
              <img src={collectCoins} alt="" />
            </div>

            <div className="img-box">
              {" "}
              <img src={voucher} alt="" />
            </div>
            <div className="step-box">
              <h3>STEP 3</h3>
              <h5>GET VOUCHER</h5>
              <div>
                <p>
                  Redeem for a $20 hotel booking voucher once you collect 20
                  coin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mainpage

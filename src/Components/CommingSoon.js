import React from "react"
import "../assets/css/CommingSoon.css"
import "../Components/Navbar.js"
import Navbar from "../Components/Navbar.js"
import Footer from "./Footer.js"

const CommingSoon = () => {
  return (
    <div className="mainSection">
      <Navbar />
      <div className="heroSection">
        {/* <hr /> */}
        <p className="greenHydrogenText">ICOGES 2024</p>
        <p className="mainText">Coming Soon...</p>
        {/* <div className="forDummyText">
          <p className="dummyText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam
            alias voluptatum ipsam iste nam tempora enim, cum temporibus esse
            unde aliquid, fugit inventore, qui amet quos. Et, eum explicabo.
            Lorem ipsum dolor sit Voluptates.
          </p>
        </div> */}
        <div className="Button">
          <a href="/conference">
            <button className="ButtonStyle">Go Back</button>
          </a>
        </div>
        {/* <hr /> */}
      </div>
      <Footer />
    </div>
  )
}

export default CommingSoon

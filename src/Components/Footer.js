import React from "react"
import "../assets/css/footer.css"
import {BiCopyright} from "react-icons/bi"
import {FaTwitter} from "react-icons/fa"
import {ImLinkedin2} from "react-icons/im"
import {ImFacebook} from "react-icons/im"
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  return (
    <div>
      <div className="footer-p2">
        <div className="parts">
          <ul>
            <li>
              1st International Conference on Green Hydrogen for global
              decarbonization
            </li>
          </ul>
        </div>
        <div className="parts_l">
          <ul>
            <li>Green Hydrogen A-Z</li>
            <li>
              <a href="https://conference.icghgd.com/committee">Committee </a>
            </li>
          </ul>
        </div>

        <div className="parts_l">
          <ul>
            <li>Blog</li>
            <li>Sponsor</li>
          </ul>
        </div>
        <div className="parts_l">
          <ul>
            <li>Anti Harrassement Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-p1">
        <div className="conf">
          <div className="foot-topic">
            <BiCopyright />
            ICGHGD-23
          </div>
          <div className="medias">
            <ul className="connect">
              <li>Connect with us</li>
              <li className="lnks">
                <a href="/">
                  <FaTwitter />
                </a>
              </li>
              <li className="lnks">
                <a href="/">
                  <ImLinkedin2 />
                </a>
              </li>
              <li className="lnks">
                <a href="/">
                  <ImFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="made-by-encode">
          <h1>Made with <FavoriteIcon color="secondary" fontSize="large" />  by Encode</h1>
      </div>
    </div>
  )
}

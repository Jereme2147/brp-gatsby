import React from "react"
import footerStyles from "../../styles/footer.module.scss"
import MobileMenu from "../nav/mobileMenu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.phone}>
          <h2>828-733-3603</h2>
        </div>
        <div className={footerStyles.address}>
          <h2>Blue Ridge Propane</h2>
          <h3>14 Turbyfill rd | Newland NC, 28657</h3>
        </div>
        <div className={footerStyles.socialAndLinks}>
          <div className={footerStyles.social}>
            <a
              href="https://www.facebook.com/blueridgepropane/"
              target="_BLANK"
              rel="noopener noreferrer"
              alt="link to facebook page"
              aria-label="Facebook Page"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a
              href="mailto:blueridgepropanenc@gmail.com"
              target="_BLANK"
              rel="noopener noreferrer"
              alt="Email link"
              aria-label="Email Link"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://twitter.com/JD2147"
              target="_BLANK"
              rel="noopener noreferrer"
              alt="Link to twitter page"
              aria-label="Twitter page"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a
              href="https://www.instagram.com/jd2147/"
              target="_BLANK"
              rel="noopener noreferrer"
              alt="link to instagram page"
              aria-label="Instagram page"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </div>
          <div className={footerStyles.links}>
            <MobileMenu />
          </div>
        </div>
        <div className={footerStyles.dev}>
          <h3>
            Designed and Developed by <a href="#">Jereme Daniels</a> | Gatsbyjs
          </h3>
        </div>
      </div>
    )
}

export default Footer;
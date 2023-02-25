import React from 'react'
import middleStyles from '../../styles/middleStyles.module.scss'
import Variables from '../variables.js'
import { Link } from "gatsby"
import Hamburger from './hamburger.js'
import hamburgerStyles from '../../styles/hamburger.module.scss'

const NavMiddle = () => {
    const activeStyle = {
        borderBottom: `10px solid ${Variables.white}`,
        color: Variables.white
    }
    return (
      <div className={middleStyles.container}>
        <h1 name="format-detection" content="telephone=no">
          828-733-3603
        </h1>
        <ul className={middleStyles.links}>
          <li>
            <Link to={"/services"} activeStyle={activeStyle}>
              <h2>Services</h2>
            </Link>
          </li>
          <li>
            <Link to={"/"} activeStyle={activeStyle}>
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to={"/blog"} activeStyle={activeStyle}>
              <h2>Blog</h2>
            </Link>
          </li>
          <li>
            <Link to={"/contact"} activeStyle={activeStyle}>
              <h2>Contact</h2>
            </Link> 
          </li>
          <li>
            <Link to={"/products"} activeStyle={activeStyle}>
              <h2>Products</h2>
            </Link>
          </li>
          <li>
            <Link to={"/safety"} activeStyle={activeStyle}>
              <h2>Safety</h2>
            </Link>
          </li>
        </ul>
        <Hamburger className={hamburgerStyles.hamburger} />
      </div>
    )
}

export default NavMiddle;
// menu for mobile menu toggle only
import React from 'react'
import { Link } from "gatsby"

const MobileMenu = () => {
    const activeStyle = {
        borderBottom: '2px solid #ffffff'
    }
    return (
        <div>
            <ul>
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
        </div>
    )
}

export default MobileMenu 
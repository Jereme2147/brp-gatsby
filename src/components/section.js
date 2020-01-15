import React from "react";
import Variables from "./variables.js"

const style = {
    height: "500px", //delete me after content
    background: `linear-gradient(to bottom, ${Variables.grey} 23%, ${Variables.white} 100%)`,
    display: 'flex',
    flexDirection: "column",
    color: `${Variables.black}`,
    alignItems: "center",
    borderBottom: `1px solid ${Variables.red}`
}

const Section = () => {
    return (
        <div style={style}></div>
    )
}

export default Section

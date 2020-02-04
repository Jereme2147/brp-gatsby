import React from "react"
import variables from "../variables.js"
const Weather = () => {
  const style = {
    p: {
      margin: "20px 5px",
    },
    a: {
      color: `${variables.black}`,
      textDecoration: "none",
    },
    li: {
      padding: "5px",
      margin: "10px 0",
    },
    ul: {
      listStyleType: "disc",
    },
  }
  return (
    <div>
      <p style={style.p}>
        These articles contain valuable safety tips to prepare you and your
        family for thunderstorms, extreme heat, power outages, earthquakes,
        wildfires, high snowfall areas, tornadoes, and winter storms. Learn more
        by clicking the links below.
      </p>
      <ul style={style.ul}>
        <li style={style.li}>
          <a
            href="https://propane.com/safety/propane-safety-and-thunderstorms/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.a}
          >
            Propane Safety and Thunderstorms
          </a>
        </li>
        <li style={style.li}>
          <a
            href="https://propane.com/safety/propane-safety-and-hurricanes/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.a}
          >
            Propane Safety and Hurricanes
          </a>
        </li>
        <li style={style.li}>
          <a
            href="https://propane.com/safety/propane-safety-and-tornadoes/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.a}
          >
            Propane Safety and Tornadoes
          </a>
        </li>
        <li style={style.li}>
          <a
            href="https://propane.com/safety/propane-safety-and-floods/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.a}
          >
            Propane Safety and Floods
          </a>
        </li>
        <li style={style.li}>
          <a
            href="https://propane.com/safety/power-outage-safety/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.a}
          >
            Power Outage Safety
          </a>
        </li>
        <li style={style.li}>
          <a
            href="https://propane.com/safety/propane-safety-and-wildfires/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.a}
          >
            Propane Safety and Wildfires
          </a>
        </li>
        <li style={style.li}>
          <a
            href="https://propane.com/safety/propane-safety-and-extreme-heat/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.a}
          >
            Propane Safety and Extreme Heat
          </a>
        </li>
        <li style={style.li}>
          <a
            href="https://propane.com/safety/winter-weather-safety-tips/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.a}
          >
            Winter Weather Safety Tips
          </a>
        </li>
        <li style={style.li}>
          <a
            href="https://propane.com/safety/propane-safety-for-high-snowfall/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.a}
          >
            Propane Safety for High Snowfall
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Weather

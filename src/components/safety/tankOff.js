import React from "react"
import SmallImage from "../smallimage.js"
import Variables from '../variables.js'

const TankOff = () => {
  const style = {
    div: {
      width: "100%",
      textAlign: "center"
    },
    image: {
          width: "80%",
          // height: "300px",
          textAlign: "center",
          borderRadius: "10px",
          // boxShadow: `2px 2px 2px ${Variables.black}, -2px -2px 2px ${Variables.white}`
      },
      imageContainer: {
          width: `100%`, //pass this to smallimage.js
          // height: "300px",
          display: "flex",
          justifyContent: "center"
      }
  }
  return (
    <a
      href="https://www.youtube.com/watch?v=0dPMiNSkOKA&feature=emb_title"
      target="_BLANK"
      rel="noopener noreferrer"
      style={{ width: "100%" }}
    >
      <SmallImage
        path={{
          title: Variables.tankOffVid,
          alt: "video how to turn your tank off",
          style: style.image,
          containerStyle: style.imageContainer,
        }}
      />
    </a>
  )
}

export default TankOff

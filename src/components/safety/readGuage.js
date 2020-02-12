import React from "react"
import SmallImage from "../smallimage.js"
import Variables from "../variables.js"


const ReadGuage = () => {
  const style = {
    div: {
      width: "100%",
      textAlign: "center",
    },
    image: {
      width: "80%",
      textAlign: "center",
      borderRadius: "10px",
    },
    imageContainer: {
      width: `100%`, //pass this to smallimage.js
      display: "flex",
      justifyContent: "center",
    },
  }
  return (
    <a
      href="https://www.youtube.com/watch?v=ZfNCihEGMqU&feature=emb_title"
      target="_BLANK"
      rel="noopener noreferrer"
      style={{ width: "100%" }}
    >
      <SmallImage
        path={{
          title: Variables.readGauge,
          alt: "video how to read your tank gauge",
          style: style.image,
          containerStyle: style.imageContainer,
        }}
      />
    </a>
  )
}

export default ReadGuage

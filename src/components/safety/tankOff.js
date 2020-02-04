import React from "react"
import Video from "./video"

const TankOff = () => {
  const style = {
    div: {
      width: "100%",
      textAlign: "center"
    }
  }
  return (
    <div style={style.div}>
      <Video
        videoSrcURL="https://www.youtube.com/embed/0dPMiNSkOKA"
        videoTitle="How to turn off your propane tank"
      />
    </div>
  )
}

export default TankOff

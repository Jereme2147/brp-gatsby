import React from "react"
import Video from './video.js'


const ReadGuage = () => {
  const style = {
    div: {
      width: "100%",
      textAlign: "center",
    },
  }
  return (
    <div style={style.div}>
      <Video
        videoSrcURL="https://www.youtube.com/embed/ZfNCihEGMqU"
        videoTitle="How to read your tank guage"
      />
    </div>
  )
}

export default ReadGuage

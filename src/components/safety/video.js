// usage
// <Video
//   videoSrcURL="https://www.youtube.com/embed/0dPMiNSkOKA"
//   videoTitle="How to turn off your propane tank"
// />

import React from 'react'

class Video extends React.Component {
  constructor( props ) {
    super(props)
    this.state = {
      width: true,
    }
  }

  componentDidMount() {
    this.handleWindowSizeChange() // Set width
    window.addEventListener("resize", this.handleWindowSizeChange)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange)
  }
  handleWindowSizeChange = () => {
    if (window.innerWidth < 950) {
      this.setState({ width: true })
    } else {
      this.setState({ width: false })
    }
  }

  render() {
    const style = {
      div: {
          width: "100%"
      },
      iframe: {
          width: `${this.state.width ? '300px': '800px'}`,
          height: `${this.state.width ? '200px': '400px'}`
      }
    }
    return (
      <div>
        {console.log(this.props.videoTitle)}
        <iframe
            style={style.iframe}
          src={this.props.videoSrcURL}
          title={this.props.videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    )
  }
}

export default Video
import React from "react"
import SmallImage from "../smallimage.js"
import Variables from "../variables.js"

class ServicePropaneAppliances extends React.Component {
  constructor() {
    super()
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
      container: {
        width: "100%",
        display: "flex",
        flexDirection: `${this.state.width ? "column" : "row"}`,
        flexWrap: `${this.state.width ? "no-wrap" : "wrap"}`,
        justifyContent: "space-around",
        alignItems: "center",
        margin: "20px 0",
        borderBottom: `1px solid ${Variables.blue}`,
        paddingBottom: "15px",
      },
      h2: {
        width: "100%",
        textAlign: "center",
        fontSize: "1.7rem",
        margin: "15px",
        textShadow: `2px 2px 1px ${Variables.white}`,
      },
      p: {
        width: `${this.state.width ? "90%" : "40%"}`,
        fontSize: "1.5rem",
      },
      image: {
        width: "100%",
        boxShadow: `2px 2px 2px ${Variables.black}, -2px -2px 2px ${Variables.white}`,
        borderRadius: "10px",
      },
      imageContainer: {
        width: `${this.state.width ? "90%" : "50%"}`,
        textAlign: "center",
        margin: "15px 0",
      },
    }
    return (
      <div style={style.container}>
        <h2 style={style.h2}>
          <span style={{ borderBottom: `2px solid ${Variables.blue}` }}>
            Service to Propane Appliances
          </span>
        </h2>
        <p style={style.p}>
          Don’t let an appliance that isn’t functioning properly get your
          worried. When you call our office at 828-733-3603 and speak to one of
          our friendly office staff, we can get a licensed service technician to
          your location. We offer annual cleanings of gas logs, unvented
          heaters. We can also troubleshoot your appliance and get it back in
          working order. We can also educate you about how to use your
          appliances in a safe and efficient manner.
        </p>
        <SmallImage
          path={{
            title: Variables.serviceRange,
            alt: "Gas Range",
            style: style.image,
            containerStyle: style.imageContainer,
          }}
        />
      </div>
    )
  }
}

export default ServicePropaneAppliances

import React from 'react'
import SmallImage from '../smallimage.js'
import Variables from '../variables.js'

class SafeInstallation extends React.Component {
    constructor() {
        super();
        this.state = {
            width: true,
        }
    }

    componentDidMount() {
        this.handleWindowSizeChange() // Set width
        window.addEventListener('resize', this.handleWindowSizeChange)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
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
            // padding: '5px',
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
              <span style={{borderBottom: `2px solid ${Variables.blue}`}}>Safe Installation</span>
            </h2>
            <p style={style.p}>
              Our dedicated team of service technicians stand ready to help with
              installations of new appliances that utilize propane. Whether the
              appliance is a replacement or completely new, our team can gladly
              provide a safe installation. We can run lines from your main
              propane tank to the appliance then leak check the entire system
              for safety. Never try to install any propane appliance yourself,
              it is always best to let the experts handle these types of
              projects. They can utilize their specialized skills to ensure
              safety at all points in the process
            </p>
            <SmallImage
              path={{
                title: Variables.serviceInstallation,
                alt: "tank installation in process",
                style: style.image,
                containerStyle: style.imageContainer,
              }}
            />
          </div>
        )
    }
}

export default SafeInstallation
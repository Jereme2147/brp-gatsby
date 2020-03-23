import React from 'react'
import SmallImage from '../smallimage.js'
import Variables from '../variables.js'

class PropaneDelivery extends React.Component {
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
            flexWrap: `${this.state.width ? 'no-wrap' : 'wrap'}`,
            justifyContent: "space-around",
            alignItems: "center",
            margin: "20px 0",
            borderBottom: `1px solid ${Variables.blue}`,
            paddingBottom: '15px'
          },
          h2: {
            width: "100%",
            textAlign: "center",
            fontSize: "1.7rem",
            margin: "15px",
            textShadow: `2px 2px 1px ${Variables.white}`
          },
          p: {
            width: `${this.state.width ? "90%" : "40%"}`,
            // padding: '5px',
            fontSize: "1.5rem",
          },
          image: {
            width: "100%",
            boxShadow: `2px 2px 2px ${Variables.black}, -2px -2px 2px ${Variables.white}`,
            borderRadius: '10px',
            
          },
          imageContainer: {
            width: `${this.state.width ? "90%" : "50%"}`,
            textAlign: 'center',
            margin: '15px 0'
          },
        }
        return (
          <div style={style.container}>
            <h2 style={style.h2}>
              <span style={{ borderBottom: `2px solid ${Variables.blue}` }}>
                Propane Delivery
              </span>
            </h2>
            <p style={style.p}>
              Our main priority for our customers is propane delivery. We
              deliver to many different types of customers: residential,
              commercial, industrial and agricultural. Our delivery drivers are
              professionally trained and licensed to handle all bulk liquid
              propane deliveries, sometimes referred to as LP Gas. The primary
              customers we service are residential customers who utilize propane
              for home heating purposes. Applications of residential propane
              usage are not limited to just home heating. Appliances that can be
              powered by propane are water heaters (standard tank and tankless),
              clothes dryers, grills, ranges, ovens, and gas lanterns just to
              name a few. All of these appliances are safe and efficient when
              installed by a licensed service technician.
            </p>
            <SmallImage
              path={{
                title: Variables.serviceDelivery,
                alt: "delivery fleet",
                style: style.image,
                containerStyle: style.imageContainer,
              }}
            />
          </div>
        )
    }
}

export default PropaneDelivery
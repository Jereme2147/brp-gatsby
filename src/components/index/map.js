import React from 'react'
import { Link } from 'gatsby'
import SmallImage from "../smallimage.js"
import Variables from "../variables.js"


class Map extends React.Component {
    constructor(props) {
        super(props);
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
                display: "flex",
                flexDirection: `${this.state.width ? 'column' : 'row'}`,
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "20px 0",
                fontSize: `${this.state.width ? "1.3rem" : "2rem"}`,
                flexWrap: "wrap",
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
          <div style={style}>
            <div
              style={{
                padding: "15px 5px",
                // flexGrow: "1",
                width: "100%"
              }}
            >
              <h3 style={{width: '100%', textAlign: 'center'}}>
                Call, Click, or stop in to <Link to={"/contact"}>connect</Link>{" "}
                with us.
              </h3>{" "}
            </div>
            <a
              href="https://www.google.com/maps?ll=36.115899,-81.933234&z=18&t=m&hl=en-US&gl=US&mapclient=embed&daddr=14+Turbyfill+Rd+Newland,+NC+28657@36.1158988,-81.93323439999999"
              target="_BLANK"
              rel="noopener noreferrer"
              style={{ width: "100%" }}
            >
              <SmallImage
                path={{
                  title: Variables.map,
                  alt: "Google map of Blue ridge propane location",
                  style: style.image,
                  containerStyle: style.imageContainer,
                }}
              />
            </a>
          </div>
        )
    }
}

export default Map
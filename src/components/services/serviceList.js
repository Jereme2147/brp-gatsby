import React from "react"
import Variables from "../variables.js"
import SmallImage from '../smallimage.js'
import { faFileExcel } from "@fortawesome/free-solid-svg-icons"

class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: true,
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.handleWindowSizeChange() // Set width
        window.addEventListener('resize', this.handleWindowSizeChange)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }
    handleWindowSizeChange = () => {
        console.log(window.innerWidth, "************* no enter")
        if (window.innerWidth < 950) {
            console.log(window.innerWidth, "handle size < 950", this.state.width)
            this.setState({ width: true })
        } else {
            console.log(window.innerWidth, "failed query")
            this.setState({ width: false })
        }

    }

    render() {
        const style = {
            div: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "20px"
            },
            h2: {
                width: "100%",
                textAlign: "center",
                fontSize: `${this.state.width == true ? '1.5rem' : '2rem'}`,
                fontWeight: "400",
                margin: "20px 0",
                textShadow: `1px 1px 1px ${Variables.white}`
            },
            container: {
                // width: "100%",
                display: "flex", //container for image and list
                flexDirection: `${this.state.width == true ? 'column' : 'row'}`,
                justifyContent: 'center',
                alignItems: 'center'
            },
            list: {
                // width: "50%",
                display: "flex",//container for ul list
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
            },
            ul: {
                // listStyle: "none",
                // width: "100%"
                fontSize: "1.5rem",
                margin: "10px",
            },
            image: {
                width: "100%",
                textAlign: "center",
                borderRadius: "10px",
                boxShadow: `2px 2px 2px ${Variables.black}, -2px -2px 2px ${Variables.white}`
            },
            imageContainer: {
                width: `${this.state.width == true ? '100%' : '50%'}`, //pass this to smallimage.js
                display: "flex",
                justifyContent: "center"
            }
        }
        return (
            <div style={style.div}>
                <h2 style={style.h2}>Blue Ridge Propane offers a full range of services.</h2>
                <div style={style.container}>
                    <SmallImage
                        path={{
                            title: Variables.truck500,
                            alt: "delivery truck",
                            style: style.image,
                            containerStyle: style.imageContainer
                        }} />
                    <div style={style.list}>
                        <ul style={style.ul}>
                            <li style={{ padding: "10px" }}>
                                <h2>Commercial and Residential Propane</h2>
                            </li>
                            <li style={{ padding: "10px" }}>
                                <h2>Appliance Sales</h2>
                                <ul style={{ marginLeft: "20px" }}>
                                    <li>Water Heaters</li>
                                    <li>Fire Logs</li>
                                    <li>Room Heaters</li>
                                    <li><a href="#">Full list HERE</a></li>
                                </ul>
                            </li>
                            <li
                                style={{ padding: "10px" }}
                            ><h2>Propane System & Appliance Service</h2></li>
                        </ul>
                    </div>
                </div>

            </div>

        )
    }
}

export default ServiceList
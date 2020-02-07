import React from 'react'
import Variables from "../variables.js"

class History extends React.Component {
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
            div: {
                display: "flex",
                flexDirection: "column",
                width: "100%"
            },
            h1: {
                fontSize: `${this.state.width ? '1.5rem' : '2.5rem'}`,
                width: "100%",
                margin: "25px 0",
                padding: "0 0 10px 0",
                textAlign: "center",
                borderBottom: `1px solid ${Variables.red}`,
                textShadow: `1px 1px 1px ${Variables.white}`
            },
            h2: {
                fontSize: `${this.state.width ? '1.5rem' : '2rem'}`,
                padding: `${this.state.width ? '10px' : '5px'}`,
                fontWeight: "400",
                marginBottom: "30px",
                textShadow: `2px 2px 1px ${Variables.white}`
            }
        }
        return (
            <div style={style.div}>
                <h1 style={style.h1}>Providing Propane Service to the High Country Since 1992</h1>
                <h2 style={style.h2}>
                    Blue Ridge Propane is your local Residential and Commercial propane
                    provider. We offer safe delivery of quality propane, tanks, and
                    accessories, right to your home, business or job-site. Call us today
                    828-733-3603
            </h2>
            </div>
        )
    }
}

export default History
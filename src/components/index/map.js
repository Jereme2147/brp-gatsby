import React from 'react'
import { Link } from 'gatsby'

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
                fontSize: `${this.state.width ? "1.3rem" : "2rem"}`
        }
        return (
            <div style={style}>
                <div style={{
                    padding: "15px 5px",
                    flexGrow: "1"
                }}><h3>Call, Click, or stop in to <Link to={'/contact'}>connect</Link> with us.</h3>  </div>
                <iframe style={{
                    flexGrow: "1"
                }} 
                title="Map to us"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1030.5687581255377!2d-81.93380285487038!3d36.11588108174933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885093c98a5b7f61%3A0x29dc06deeba0ad8c!2s14+Turbyfill+Rd%2C+Newland%2C+NC+28657!5e0!3m2!1sen!2sus!4v1550507219401" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Map
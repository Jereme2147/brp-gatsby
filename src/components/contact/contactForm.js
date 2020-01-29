import React from "react"
import Variables from "../variables.js"
import Form from "./form.js"

class ContactForm extends React.Component {
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
          container: {
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            alignItems: "center"
          },
          info: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0",
          },
          h2: {
            fontSize: `${this.state.width == true ? "1.2rem" : "2rem"}`,
            fontWeight: "400",
            textAlign: "center",
            borderBottom: `2px solid ${Variables.red}`,
            padding: "0 10px 15px 10px",
            lineHeight: "1.2",
            marginBottom: "10px"
          },
          h3: {
            fontSize: `${this.state.width == true ? "1.2rem" : "2rem"}`,
            textShadow: `1px 1px 1px ${Variables.white}`,
            lineHeight: "1.2",
          },
        }
        return (
          <div style={style.container}>
            <div style={style.info}>
              <h2 style={style.h2}>
                CONTACT BLUE RIDGE PROPANE HERE FOR SERVICE, DELIVERY, PRODUCTS
                OR MORE INFORMATION
              </h2>
              <h3 style={style.h3}>Blue Ridge Propane</h3>
              <h3 style={style.h3}>PO Box 789</h3>
              <h3 style={style.h3}>14 Turbyfill Rd</h3>
              <h3 style={style.h3}>Newland NC, 28657</h3>
              <h3 style={style.h3}>Phone: 828-733-3603</h3>
              <h3 style={style.h3}>Fax: 828-733-1438</h3>
              <a href="#">
                <h3 style={style.h3}>Blueridgepropanenc@gmail.com</h3>
              </a>
            </div>
            <Form />
          </div>
        )
    }
}

export default ContactForm
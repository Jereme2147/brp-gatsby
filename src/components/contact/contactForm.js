import React from "react"
import Variables from "../variables.js"
import FormStyle from "./formStyle"
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
            <form
              style={FormStyle.form}
              action="/brp/mail.php"
              id="contact-form"
              method="POST"
            >
              <input
                style={FormStyle.input}
                type="text"
                class="inputs"
                id="first"
                name="first"
                placeholder="first name"
                alt="first name field"
              />
              <input
                style={FormStyle.input}
                type="text"
                class="inputs"
                id="last"
                name="last"
                placeholder="last name*"
                required
                alt="last name field"
              />
              <input
                style={FormStyle.input}
                type="email"
                class="inputs"
                id="email"
                name="email"
                placeholder="customer@gmail.com*"
                required
                alt="email field"
              />
              <input
                style={FormStyle.input}
                type="text"
                class="inputs"
                id="business"
                name="business"
                placeholder="your business name"
                alt="business input"
              />
              <input
                style={FormStyle.input}
                type="tel"
                id="phone"
                class="inputs"
                name="phone"
                placeholder="Phone: 828-000-0000"
              />
              <div id="user-info">
                <h4 class="contact-titles">I'm interested in:</h4>
                <select name="choose" id="dropdown">
                  <fieldset>
                    <option name="need" value="none">
                      -Choose one-
                    </option>
                    <option name="need" value="request delivery">
                      Request a delivery
                    </option>
                    <option name="need" value="change suppliers">
                      Change Propane Suppliers
                    </option>
                    <option name="need" value="learn about pricing">
                      Learn about Propane pricing options
                    </option>
                    <option name="need" value="switch to lp">
                      Switch to Propane
                    </option>
                  </fieldset>
                </select>
              </div>
              <div>
                <ul>
                  <li>
                    {" "}
                    <input name="heating" value="heating" type="checkbox"/>
                      Heating
                  </li>
                  <li>
                    {" "}
                    <input name="cooking" value="cooking" type="checkbox"/>
                      Cooking
                  </li>
                  <li>
                    {" "}
                    <input name="water" value="water heater" type="checkbox"/>
                      Water Heater
                  </li>
                  <li>
                    {" "}
                    <input name="fireplace" value="fireplace" type="checkbox"/>
                      Fireplace
                  </li>
                  <li>
                    {" "}
                    <input name="clothes" value="clothes dryer" type="checkbox"/>
                      Clothes Dryer
                  </li>
                  <li>
                    {" "}
                    <input name="generator" value="generator" type="checkbox"/>
                      Generator
                  </li>
                </ul>
              </div>
              <div id="comment">
                <textarea
                  id="comments"
                  name="comments"
                  placeholder="Any additional questions or comments"
                ></textarea>
              </div>
              <div id="submit">
                <button type="submit" name="sumbit" alt="send button">
                  Send
                </button>
              </div>
            </form>
          </div>
        )
    }
}

export default ContactForm
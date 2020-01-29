import React from "react"
import FormStyle from "./formStyle.js"
import FormQuestions from "./formQuestions.js"
import Variables from "../variables.js"

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                submit: {
                    background: `${Variables.blue}`,
                    margin: "20px",
                    width: "40vw",
                    maxWidth: "400px",
                    fontSize: "2rem",
                    borderRadius: "10px",
                    color: `${Variables.white}`,
                    borderTop: `2px solid ${Variables.white}`,
                    borderLeft: `2px solid ${Variables.white}`,
                    boxShadow: `3px 3px 3px ${Variables.grey}`,
                },
            }

        }
        this.enter = this.enter.bind(this);
        this.exit = this.exit.bind(this); 
    }
    enter() {
        this.setState({
            style: {
                submit: {
                    background: `${Variables.red}`,
                    margin: "20px",
                    width: "40vw",
                    maxWidth: "400px",
                    fontSize: "2rem",
                    borderRadius: "10px",
                    color: `${Variables.white}`,
                    borderTop: `2px solid ${Variables.white}`,
                    borderLeft: `2px solid ${Variables.white}`,
                    boxShadow: `3px 3px 3px ${Variables.grey}`,
                }
            }
        })
    }
    exit = () => {
        this.setState({
            style: {
                submit: {
                    background: `${Variables.blue}`,
                    margin: "20px",
                    width: "40vw",
                    maxWidth: "400px",
                    fontSize: "2rem",
                    borderRadius: "10px",
                    color: `${Variables.white}`,
                    borderTop: `2px solid ${Variables.white}`,
                    borderLeft: `2px solid ${Variables.white}`,
                    boxShadow: `3px 3px 3px ${Variables.grey}`,
                }
            }
        })
    }

    render() {

        return (
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
                <FormQuestions />
                <div id="comment" style={{ width: "100%" }}>
                    <textarea
                        style={FormStyle.textarea}
                        id="comments"
                        name="comments"
                        placeholder="Any additional questions or comments"
                    ></textarea>
                </div>
                <div id="submit">
                    <button 
                        style={FormStyle.button}
                        style={this.state.style.submit} 
                        type="submit" 
                        name="sumbit" 
                        alt="send button"
                        onMouseEnter={this.enter}
                        onMouseLeave={this.exit}
                        >
                        Send
                </button>
                </div>
            </form>
        )
    }
}

export default Form
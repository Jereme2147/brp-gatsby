import React from "react"
import Variables from "../variables";

class FormQuestions extends React.Component {
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
            container: {
                display: "flex",
                flexDirection: `${this.state.width === true ? 'column' : 'row'}`,
                width: "100%",
                justifyContent: "space-around"
            },
            h3: {
                fontSize: `${this.state.width === true ? '1.5rem' : '2rem'}`,
                textAlign: "center",
                padding: "10px",
                borderBottom: `1px solid ${Variables.red}`,
                marginBottom: '5px'
            },
            ul: {
                listStyle: "none",
                fontSize: "1.3rem",
                padding: "5px",
                lineHeight: "1.5",
            }
        }
        return (
            <div style={style.container}>
                <ul style={style.ul}>
                    <h3 style={style.h3}>I'm interested in: </h3>
                    <li>
                        {" "}
                        <input name="delivery" value="delivery" type="checkbox" />
                        Request a delivery
                    </li>
                    <li>
                        {" "}
                        <input name="change" value="change" type="checkbox" />
                        Change propane suppliers
                    </li>
                    <li>
                        {" "}
                        <input name="pricing" value="pricing" type="checkbox" />
                        Learn about propane pricing options
                    </li>
                    <li>
                        {" "}
                        <input name="switch" value="switch" type="checkbox" />
                        Switch to propane
                    </li>
                </ul>
                <ul style={style.ul}>
                    <h3 style={style.h3}>I use propane for:</h3>
                    <li>
                        {" "}
                        <input name="heating" value="heating" type="checkbox" />
                        Heating
                    </li>
                        <li>
                            {" "}
                            <input name="cooking" value="cooking" type="checkbox" />
                            Cooking
                    </li>
                        <li>
                            {" "}
                            <input name="water" value="water heater" type="checkbox" />
                            Water Heater
                    </li>
                        <li>
                            {" "}
                            <input name="fireplace" value="fireplace" type="checkbox" />
                            Fireplace
                    </li>
                        <li>
                            {" "}
                            <input name="clothes" value="clothes dryer" type="checkbox" />
                            Clothes Dryer
                    </li>
                        <li>
                            {" "}
                            <input name="generator" value="generator" type="checkbox" />
                            Generator
                    </li>
                </ul>
            </div>
        )
    }
}

export default FormQuestions


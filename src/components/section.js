import React from "react";
import Variables from "./variables.js"

const style = {
    background: `linear-gradient(to bottom, ${Variables.grey} 23%, ${Variables.white} 100%)`,
    display: 'flex',
    flexDirection: "column",
    color: `${Variables.black}`,
    alignItems: "center",
    borderBottom: `1px solid ${Variables.red}`
}
const innerStyle = {
    width: "100%",
    maxWidth: "1000px",
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'space-around',
}

class Section extends React.Component {
    constructor(props){
        super(props);
        this.navElement = React.createRef();
        this.state = {

        }
    }
    render(props) {
        return (
            <div style={style}>
                <div style={innerStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Section;
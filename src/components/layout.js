import React from "react"
import Colors from "./variables.js"
import layoutStyles from "../styles/layout.module.scss"
import Nav from "./nav/nav.js"
import Footer from "./footer/footer.js";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
library.add(fab,faCheckSquare, faCoffee)

class Layout extends React.Component {
    constructor(props){
        super(props);
        this.navElement = React.createRef();
        this.state = {
            
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render(props) {
        return (
            <div style={
                {
                    width: "100%",
                    backgroundColor: `${ Colors.grey }`,
                    minHeight: "100vh", //change to 100vh after content******
                    margin: 0
                }
            } className={layoutStyles.container}>
                <Nav />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;
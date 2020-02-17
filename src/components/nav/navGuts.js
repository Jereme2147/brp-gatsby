// nav section. controls logo/map imports middle (# and links)
import React from "react"
import NavMiddle from "./navPhoneAndLinks.js"
import gutsStyles from "../../styles/guts.module.scss"
import { withPrefix } from "gatsby"

class NavGuts extends React.Component {
  constructor(props) {
    super(props)
    this.navElement = React.createRef();
    this.state = {
      containerStyle: {
          visible: true
      }, 
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos > 30) {
      this.setState({
            containerStyle: {
                visible: false
              },
      })
    } else {
      this.setState({
        containerStyle: {
          visible: true
        },
      })
    }
  }
  
  render() {
     
   return (
     <div className={gutsStyles.gutsContainer}>
       <div
         className={
           this.state.containerStyle.visible
             ? gutsStyles.fadeInLogo
             : gutsStyles.fadeOutLogo
         }
       >
         <img
           src={withPrefix("/brp-logo.jpg")}
           style={this.state.containerStyle}
           onScroll={this.handleScroll}
           alt="Blue Ridge Propane Logo"
         />
       </div>
       <NavMiddle />
       <div
         className={
           this.state.containerStyle.visible
             ? gutsStyles.fadeInMap
             : gutsStyles.fadeOutMap
         }
       >
         <img
           src={withPrefix("/map.jpg")}
           onScroll={this.handleScroll}
           alt="Blue Ridge Propane Service area"
         />
       </div>
     </div>
   )
    }
}
export default NavGuts

import React from 'react'
import QuickNav from './quickNav.js'
import navStyles from '../../styles/nav.module.scss'
import NavGuts from './navGuts.js'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.navElement = React.createRef();
    this.state = {
      containerStyle: {
        height: "20vh",
        // width: "100vw"
        // backgroundColor: `${ Colors.blue }`
      },
      logoStyle: {
          
      },
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 30) {
      this.setState({
        containerStyle: {
          height: `10vh`,
          // width: "100%",
        }
      })
    } else {
      this.setState({
        containerStyle: {
          height: `20vh`,
          // width: "100%"
        }
      })
    }
  }
  render() {
    return (
      <div>
        <QuickNav />
        <div
          style={this.state.containerStyle}
          className={navStyles.navContainer}
          onScroll={this.handleScroll}
        >
        <NavGuts />
        </div>
      </div>
    )
  }
}
export default Nav

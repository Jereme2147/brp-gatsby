import React from 'react'

class SafetyBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: true,
            visible: false,
        }
        this.handleClick = this.handleClick.bind(this)
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
    handleClick = () => {
        if(this.state.visible){
            this.setState({visible: false})
        }else{
            this.setState({visible: true})
        }
    }

    render(props) {
        const style = {
          container: {
            display: "flex",
            // flexDirection: `${this.state.width === true ? "column" : "row"}`,
            flexDirection: 'column',
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px 0",
            fontSize: `${this.state.width === true ? "1.3rem" : "2rem"}`,
          },
          div: {
            display: `${this.state.visible ? "flex" : "none"}`,
          },
        }
        return (
          <div 
            style={style.container}
            onClick={this.handleClick}
            >
            <h3>▼ Learn more ▼</h3>
            <div style={style.div}>{this.props.children}</div>
          </div>
        )
    }
}

export default SafetyBlock
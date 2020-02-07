import React from 'react'

class SafetyBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: true,
            visible: false,
            cursor: 'auto'
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
    enter = () => {
        this.setState({cursor: 'pointer'})
    }
    exit = () => {
        this.setState({cursor: 'auto'})
    }
    render(props) {
        const style = {
          container: {
            display: "flex",
            flexDirection: 'column',
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px 0",
            fontSize: `${this.state.width ? "1.3rem" : "2rem"}`,
            cursor: `${this.state.cursor}`
          },
          div: {
            display: `${this.state.visible ? "flex" : "none"}`,
          },
        }
        return (
          <div 
            style={style.container}
            onClick={this.handleClick}
            onMouseEnter={this.enter}
            onMouseLeave={this.exit}
            >
            <h3>▼ Learn more ▼</h3>
            <div style={style.div}>{this.props.children}</div>
          </div>
        )
    }
}

export default SafetyBlock
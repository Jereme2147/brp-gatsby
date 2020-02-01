import React from 'react'

class Element extends React.Component {
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
            display: "flex",
            flexDirection: `${this.state.width === true ? 'column' : 'row'}`,
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px 0",
            fontSize: `${this.state.width === true ? "1.3rem" : "2rem"}`
        }
        return (
            <div style={style}>
                
            </div>
        )
    }
}

export default **ELEMENT
import React from 'react'
import variables from '../variables.js'

class Hours extends React.Component {
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
        if(window.innerWidth < 950) {
            this.setState({ width: true })
        }else {
            this.setState({ width: false})
        }
        
    }

    render() {
        const h3Style = {
            fontSize: `${this.state.width ? '1.2rem' : '2rem'}`,
            fontWeight: '400',
            padding: '10px 0'
        }
        return (
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <img
                    style={{
                        width: "70%",
                    }}
                    src="clock.png"
                    alt="time clock"
                />
                <h2
                    style={{
                        textShadow: `4px 4px 1px ${variables.grey}`,
                        fontSize: `${this.state.width ? '1.5rem' : '2.5rem'}`,
                        padding: '10px'
                    }}
                >Hours of Operation</h2>
                <h2 style={h3Style}>7:30 a.m. - 4 p.m. Monday - Friday</h2>
                <h2 style={h3Style}>24 hours / 365 Days Emergency Service</h2>
            </div>
        )
    }
}

export default Hours
import React from 'react'
import variables from './variables.js'

const findWidth = () => {
    if (window.innerWidth < 950) {
        return (true);
    } else {
        return (false);
    }
}
const h3Style = {
    fontSize: `${findWidth() ? '1.5rem' : '2rem'}`,
    fontWeight: '400',
    padding: '10px 0'
}
const Hours = () => {
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
                    // borderRadius: "20px"
                }}
                src="clock.png"
                alt="time clock"
            />
            <h2
                style={{ 
                        textShadow: `4px 4px 1px ${variables.grey}`,
                        fontSize: `${findWidth() ? '1.5rem' : '2.5rem'}`,
                        padding: '10px'
            }}
            >Hours of Operation</h2>
            <h2 style={h3Style}>7:30 a.m. - 4 p.m. Monday - Friday</h2>
            <h2 style={h3Style}>24 hours / 365 Days Emergency Service</h2>
        </div>
    )
}

export default Hours
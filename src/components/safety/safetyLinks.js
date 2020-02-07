import React from 'react'
import variables from '../variables.js'

const SafetyLinks = () => {
    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            margin: "20px 0"
        },
        links: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: '600px',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 10px',
            borderBottom: `2px solid ${variables.blue}`
        },
        h2: {
            fontSize: '2rem',
        },
        h3: {
            fontSize: '1.5rem',
        }
    }
    return (
        <div style={style.container}>
            <h2 style={style.h2}>Additional Propane Safety Links</h2>
            <div style={style.container}>
                <div style={style.links}>
                    <img src="./nfpa100x100.jpg" alt="nfpa emblem"/>
                    <a 
                        href="https://www.nfpa.org/Public-Education/By-topic/Safety-in-the-home/Gasoline-and-propane"
                        rel="noopener noreferrer">
                            <h3 style={style.h3}>NFPA Propane Safety</h3>
                        </a>
                </div>
                <div style={style.links}>
                    <img src="./propane100x100.jpg" alt="propane.com logo"  />
                    <a
                        href="https://propane.com/safety/"
                        rel="nooper noreferrrer"
                    >
                        <h3 style={style.h3}>Propane.com</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default SafetyLinks
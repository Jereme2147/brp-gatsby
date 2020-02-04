import React from 'react'
import Layout from "../components/layout.js"
import Banner from "../components/banner/banner.js"
import variables from "../components/variables.js"
import Section from "../components/section.js"
import SmallImage from "../components/smallimage.js"
import SafetyBlock from "../components/safety/safetyBlock.js"
import SmellGas from '../components/safety/smellGas.js'
import TankOff from '../components/safety/tankOff.js'
import ReadGuage from '../components/safety/readGuage.js'
import Weather from '../components/safety/weather.js'

const Safety = () => {
    const style = {
      image: {
        width: "90%",
      },
      h2: {
        width: "100%",
        textAlign: "center",
        fontSize: "2rem",
        margin: "10px",
      },
    }
    return (
      <Layout>
        <Banner banner={variables.safetyBanner} />
        <h1
          style={{
            width: "100%",
            fontSize: "2.5rem",
            color: `${variables.black}`,
            textAlign: "center",
            margin: "20px 0",
            lineHeight: "2",
          }}
        >
          <span style={{ borderBottom: `2px solid ${variables.red}` }}>
            Propane Safety
          </span>
        </h1>
        <Section>
          <h2 style={style.h2}>What to do if you smell gas:</h2>
          <SmallImage
            path={{
              title: variables.smellGas,
              alt: "woman making concerned phone call",
              style: style.image,
              containerStyle: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
              },
            }}
          />
          <SafetyBlock>
            <SmellGas />
          </SafetyBlock>
        </Section>
        <Section>
          <h2 style={style.h2}>How to shut off your propane tank:</h2>
          <SmallImage
            path={{
              title: variables.tankOff,
              alt: "LP Gas tank",
              style: style.image,
              containerStyle: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
              },
            }}
          />
          <SafetyBlock>
            <TankOff />
          </SafetyBlock>
        </Section>
        <Section>
          <h2 style={style.h2}>How to read your propane tank gauge:</h2>
          <SmallImage
            path={{
              title: variables.gauge,
              alt: "LP Gas tank gauge",
              style: style.image,
              containerStyle: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
              },
            }}
          />
          <SafetyBlock>
            <ReadGuage />
          </SafetyBlock>
        </Section>
        <Section>
          <h2 style={style.h2}>Propane and weather safety</h2>
          <SmallImage
            path={{
              title: variables.weather,
              alt: "Blue Ridge Mountains in the snow",
              style: style.image,
              containerStyle: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
              },
            }}
          />
          <SafetyBlock>
            <Weather />
          </SafetyBlock>
        </Section>
        <Section></Section>
      </Layout>
    )
}

export default Safety
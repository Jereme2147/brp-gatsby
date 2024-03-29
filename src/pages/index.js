import React from "react"
import Layout from "../components/layout.js"
import Banner from "../components/banner/banner.js"
import variables from "../components/variables.js"
import Section from "../components/section.js"
// import { faFileExcel } from "@fortawesome/free-solid-svg-icons"
import BlogSingle from "../components/blogSingle.js"
import Hours from "../components/index/hours.js"
import FullScreenImage from "../components/fullScreenImage.js"
import Map from "../components/index/map.js"
import Head from '../components/head.js'

class IndexPage extends React.Component {
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
        const h1Style = {
            textAlign: "center",
            fontSize: `${this.state.width ? "2rem" : "2.5rem"}`,
            borderBottom: `1px solid ${variables.red}`,
            padding: "10px 0"
        }
        const imgDivStyle = {
            display: `${this.state.width ? 'flex' : 'none'}`,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        }
        return (
            <Layout>
                <Head title={'Home'} />
                <Banner banner={variables.homeBanner} />
                <Section>
                    <div>
                        <h1 style={h1Style}>
                            SERVING THE HIGH COUNTRY'S PROPANE NEEDS IN WESTERN NC AND EASTERN TN SINCE 1992
                        </h1>
                        {/* Done - and damn
                        if I didn't do a good comment job! remove the following line after covid */}
                        {/* <h2 style={{color: `${variables.red}`, fontSize: '2rem', textAlign: 'center', marginTop: '20px', textShadow: `2px 2px 2px ${variables.white}`, padding: '5px'}}>
                            We Are Practicing Social Distancing!
                            </h2> */}
                        {/* remove above line */}
                        <div style={imgDivStyle}>
                            <img
                                style={{
                                    width: "80%",
                                    borderRadius: "20px"
                                }}
                                src="map.jpg"
                                alt="Blue Ridge Propane Service area"
                            />
                        </div>
                        <h3 style={{ fontSize: `${this.state.width ? '1.5rem' : '2rem'}`, padding: '5px 20px', marginTop: '25px' }}>
                            Your only locally owned and operated full service propane company
                            based in Avery County NC and serving Carter County TN by people you know
                            from your community.
                    </h3>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px 0'
                        }}>
                            <img
                                style={{
                                    width: `${this.state.width ? '30%' : '40%'}`
                                }}
                                src="bbb.jpg"
                                alt="better business bureau"
                            />
                            <h2
                                style={{
                                    fontSize: `${this.state.width ? '1rem' : '1.5rem'}`,
                                    padding: '10px 0'
                                }}
                            >
                                A+ Rated by the Better Business Bureau
                        </h2>
                        </div>
                    </div>
                </Section>
                <Section>
                    <BlogSingle />
                </Section>
                <Section>
                    <Hours />
                </Section>
                <FullScreenImage fullImage={variables.landingBanner} />
                <Section>
                    <Map />
                </Section>
            </Layout>
        )
    }
}

export default IndexPage
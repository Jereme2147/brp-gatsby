import React from "react"
import Layout from "../components/layout.js"
import Banner from "../components/banner.js"
import variables from "../components/variables.js"
import Section from "../components/section.js"
import { faFileExcel } from "@fortawesome/free-solid-svg-icons"
import BlogSingle from "../components/blogSingle.js"
import Hours from "../components/hours.js"
import FullScreenImage from "../components/fullScreenImage.js"

//media query
const findWidth = () => {
    if (window.innerWidth < 950) {
        return (true);
    } else {
        return (false);
    }
}
const h1Style = {
    textAlign: "center",
    fontSize: `${findWidth() ? "2rem" : "2.5rem"}`,
    borderBottom: `1px solid ${variables.red}`,
    padding: "10px 0"
}
const imgDivStyle = {
    display: `${findWidth() ? 'flex' : 'none'}`,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
}
const IndexPage = () => {
    return (
        <Layout>
            <Banner banner={variables.homeBanner} />
            <Section>
                <div>
                    <h1 style={h1Style}>
                        SERVING THE HIGH COUNTRIES PROPANE NEEDS IN WESTERN NC AND EASTERN TN SINCE 1992
                    </h1>
                    <div style={ imgDivStyle }>
                        <img
                            style={{ width: "80%",
                                    borderRadius: "20px" }}
                            src="map.jpg"
                            alt="Blue Ridge Propane Service area"
                        />
                    </div>
                    <h3 style={{fontSize: `${findWidth() ? '1.5rem':'2rem'}`, padding: '5px 20px', marginTop: '25px'}}>
                        Your only locally owned and operated bull servicer propane company 
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
                                width: `${findWidth() ? '30%' : '40%'}`
                            }}
                            src="bbb.jpg"
                            alt="better business bureau"
                        />
                        <h2
                            style={{
                                fontSize: `${findWidth() ? '1rem' : '1.5rem'}`,
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
            {/* <Section> */}
                <FullScreenImage fullImage={variables.landingBanner}/>
            {/* </Section> */}
        </Layout>
    )
}
export default IndexPage;

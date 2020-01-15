import React from "react"
import Layout from "../components/layout.js"
import Banner from "../components/banner.js"
import variables from "../components/variables.js"
import Section from "../components/section.js"


const IndexPage = () => {
    return (
        <Layout>
            <Banner banner={variables.homeBanner} />
            <Section>
                
            </Section>
        </Layout>
    )
}
export default IndexPage;

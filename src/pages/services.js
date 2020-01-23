import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner/banner.js"
import variables from "../components/variables.js"
import History from "../components/services/history.js"
import Section from "../components/section.js"
import ServiceList from "../components/services/serviceList.js"

const Services = () => {
    return (
        <Layout>
            <Banner banner={variables.servicesBanner} />
            <Section>
                <History />
            </Section>
            <Section>
                <ServiceList />
            </Section>
        </Layout>
    )
}
export default Services
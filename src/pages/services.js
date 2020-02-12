import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner/banner.js"
import variables from "../components/variables.js"
import History from "../components/services/history.js"
import Section from "../components/section.js"
import ServiceList from "../components/services/serviceList.js"
import Head from "../components/head.js"
import PrimaryServices from '../components/services/primaryServices.js'

const Services = () => {
    return (
        <Layout>
            <Head title={"Services"} />
            <Banner banner={variables.servicesBanner} />
            <Section>
                <History />
            </Section>
            <Section>
                <ServiceList />
            </Section>
            <Section>
                <PrimaryServices />
            </Section>
        </Layout>
    )
}
export default Services
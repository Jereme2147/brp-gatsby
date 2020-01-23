import React from "react"
import Layout from "../components/layout.js"
import Section from "../components/section.js"
import Banner from "../components/banner/banner.js"
import Variables from "../components/variables.js"
import ContactForm from "../components/contact/contactForm.js"

const Contact = () => {
    return (
        <Layout>
            <Banner banner={Variables.contactBanner} />
            <Section>
                <ContactForm />
            </Section>
        </Layout>
        
    )
}

export default Contact
import React from "react"
import Layout from "../components/layout.js"
import Section from "../components/section.js"
import Banner from "../components/banner/banner.js"
import Variables from "../components/variables.js"
import ContactForm from "../components/contact/contactForm.js"
import Head from "../components/head.js"

const Sent = () => {
  return (
    <Layout>
      <Head title={"Contact"} />
      <Banner banner={Variables.contactBanner} />
      <Section>
          <h1 style={{width: '100%', textAlign: 'center', fontSize: '2rem', textShadow: `1px 1px 2px ${Variables.red}`}}>
              -Your message has been delivered.-
          </h1>
      </Section>
      <Section>
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default Sent

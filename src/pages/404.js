import React from "react"
import Layout from "../components/layout.js"
import Section from "../components/section.js"
import Banner from "../components/banner/banner.js"
import Variables from "../components/variables.js"
import ContactForm from "../components/contact/contactForm.js"
import Head from "../components/head.js"

const NoPage = () => {
  return (
    <Layout>
      <Head title={"Contact"} />
      <Banner banner={Variables.contactBanner} />
      <Section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <h1
            style={{
              width: "100%",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            404
          </h1>
          <h1
            style={{
              width: "100%",
              fontSize: "2rem",
            }}
          >
            I'm sorry, something went wrong. We can't find the page you're
            looking for.
          </h1>
        </div>
      </Section>
    </Layout>
  )
}

export default NoPage

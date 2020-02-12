import React from "react"
import variables from "../components/variables.js"
import Layout from "../components/layout.js"
import Banner from "../components/banner/banner.js"
import Section from '../components/section.js'
import Head from "../components/head.js"

class BillPay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: true,
      shaddow: `-2px -2px 2px ${variables.white}, 
                    2px 2px 2px ${variables.black}`,
    }
  }

  componentDidMount() {
    this.handleWindowSizeChange() // Set width
    window.addEventListener("resize", this.handleWindowSizeChange)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange)
  }
  handleWindowSizeChange = () => {
    if (window.innerWidth < 950) {
      this.setState({ width: true })
    } else {
      this.setState({ width: false })
    }
  }
  enter = () => {
      this.setState({
        shaddow: `-1px -1px 1px ${variables.white}, 
                    1px 1px 1px ${variables.black}`,
      })
  }
  exit = () => {
      this.setState({
        shaddow: `-2px -2px 2px ${variables.white}, 
                    2px 2px 2px ${variables.black}`,
      })
  }
  render() {
    const style = {
      container: {
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        width: "95%",
      },
      h2: {
        fontSize: "2rem",
        fontWeight: "400",
        textShadow: `1px 1px 1px ${variables.white}`,
        padding: "5px",
        marginTop: "10px",
      },
      p: {
        padding: "5px",
        fontSize: "1.2rem",
        lineHeight: "1.2",
      },
      button: {
        width: "50%",
        maxWeigth: "500px",
        background: `${variables.submit}`,
        margin: '20px 0',
        height: '50px',
        borderRadius: '10px',
        color: `${variables.white}`,
        boxShadow: `${this.state.shaddow}`
      },
    }
    return (
      <Layout>
        <Head title={"Pay"} />
        <Banner banner={variables.safetyBanner} />
        <Section>
          <div style={style.container}>
            <div>
              <span style={{ width: "100%", textAlign: "center" }}>
                <h2 style={style.h2}>Bill Pay</h2>
              </span>
              <p style={style.p}>
                You can view your history as well as pay bills by setting up a
                user name and password using your Customer ID, found beside your
                regular Account ID on our new invoices and statements. If you
                have questions or trouble, please don't hesitate to contact us
                at 828-733-3603 or via email{" "}
                <a href="mailto:blueridgepropanenc@gmail.com">
                  blueridgepropanenc@gmail.com
                </a>
              </p>
            </div>
            <span style={{ width: "100%", textAlign: "center" }}>
              <button
                style={style.button}
                onMouseEnter={this.enter}
                onMouseLeave={this.exit}
              >
                <a
                  href="https://members.rccbi.com/webinq/fds/blunew/FQStart.aspx"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <h2
                    style={{
                      color: `${variables.white}`,
                      fontSize: "1.1rem",
                      textDecoration: "none",
                    }}
                  >
                    Pay your bill here
                  </h2>
                </a>
              </button>
            </span>

            <div>
              <span style={{ width: "100%", textAlign: "center" }}>
                <h2 style={style.h2}>Privacy Policy</h2>
              </span>
              <h2 style={style.h2}>What information do we collect?</h2>
              <p style={style.p}>
                We collect information from you when you register on our site or
                fill out a form. When registering on our site, you will be asked
                to enter your name and email address.
              </p>
              <h2 style={style.h2}>What do we use your information for?</h2>
              <p style={style.p}>
                Any of the information we collect from you may be used in one of
                the following ways: -To personalize your experience (your
                information helps us to better respond to your individual needs)
                -To improve customer service (your information helps us to more
                effectively respond to your customer service requests and
                support needs). -To Process Transactions: Your information
                whether public or private, will not be sold, exchanged,
                transferred or give to any other company for any reason
                whatsoever, without your consent, other than for the purpose of
                delivering the purchased product or service requested by the
                customer. -To send periodic emails: The email address you
                provide for order processing may be used to send you information
                and updates pertaining to your propane service and/or delivery.
                This could be in the form of invoices, statements, or company
                announcements.
              </p>
              <h2 style={style.h2}>How do we protect your information?</h2>
              <p style={style.p}>
                We implement a variety of security measures to maintain the
                safety of your personal information when you access your
                personal information.
              </p>
              <h2 style={style.h2}>
                Do we disclose any information to outside parties?
              </h2>
              <p style={style.p}>
                We do not sell, trade, or ortherwise transfer to outside parties
                your personally identifiable information. This does not include
                trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential. We may also
                release your information when we believe release is appropriate
                to comply with the law, enforce our site policies, or protect
                ours or others rights, property, or safety.
              </p>
              <h2 style={style.h2}>Third Party Links</h2>
              <p style={style.p}>
                Occassionally at our discretion we may include or offer third
                party products or services on our website. These third party
                sites have separate and independent privacy policies. We
                therefore have no responsibility or liability for the content
                and activities of these linked sites. Nonetheless, we seek to
                protect the integrity of our site and welcome any feedback about
                these sites.
              </p>
              <h2 style={style.h2}>Online Privacy Policy</h2>
              <p style={style.p}>
                This online privacy policy applies only to information collected
                through our website and not to information collected offline.
              </p>
              <h2 style={style.h2}>Your Consent</h2>
              <p style={style.p}>
                By using our site, you consent to our privacy policy.
              </p>
              <h2>Changes to our Privacy Policy</h2>
              <p style={style.p}>
                If we decide to change our privacy policy, we will post those
                changes on this page. This policy was last modified 07/27/2017.
              </p>
              <h2 style={style.h2}>Contacting Us</h2>
              <p style={style.p}>
                If there are any questions regarding this privacy policy you may
                contact us using the information below:
              </p>
              <a href="mailto:blueridgepropanenc@gmail.com">
                blueridgepropanenc@gmail.com
              </a>
              <p style={style.p}>
                Physical Address: 14 Turbyfill Road, Newland NC 28657 Mailing
                Address: P.O. Box 789, Newland NC 28657
              </p>
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default BillPay

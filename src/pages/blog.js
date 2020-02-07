import React from 'react'
import { graphql } from "gatsby"
import Section from '../components/section'
import Layout from '../components/layout'
import Banner from "../components/banner/banner.js"
import variables from "../components/variables.js"
import BlogById from "../components/blog/getBlogById"

export const data = graphql`
         query{
           allContentfulBlog(sort: { order: DESC, fields: date }, limit: 10) {
             nodes {
               content {
                 json
               }
               date
               title
               id
             }
           }
         }
       `
class Blog extends React.Component {
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
    setStyle = (id) => {
        document.getElementById(id).style.height = 'auto'
    }
    render() {

        // const style = {
        //     container: {
        //     display: "flex",
        //     flexDirection: `column`,
        //     width: "100%",
        //     justifyContent: "space-around",
        //     alignItems: "center",
        //     padding: "20px 0",
        //     fontSize: `${this.state.width === true ? "1.3rem" : "2rem"}`,
        //   },
        // }
        return (
          <Layout>
            <Banner banner={variables.homeBanner} />
              <div >
                  {this.props.data.allContentfulBlog.nodes.map((item) => {
                    return (
                      <Section key={item.id}>
                        <BlogById id={item.id} key={item.id}/>
                      </Section>
                    )
                  })}
              </div>
          </Layout>
        )
    }
}

export default Blog

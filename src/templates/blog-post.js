
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Banner from '../components/banner/banner.js'
import Section from "../components/section"
import Head from "../components/head.js"
import variables from "../components/variables.js"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Style from "./blog-post.module.scss"

export const query = graphql`
         query($slug: String!) {
           contentfulBlog(slug: { eq: $slug }) {
             id
             title
             date(formatString: "Do MMMM, YYYY")
             blogImage {
               fluid(maxWidth: 750) {
                 ...GatsbyContentfulFluid
               }
             }
             content {
               json
             }
           }
         }
       `

const BlogPost = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulBlog.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <Banner banner={variables.safetyBanner} />
      <Section>
        <div className={Style.content}>
          <h1>{props.data.contentfulBlog.title}</h1>
          <span className="meta">
            Posted on {props.data.contentfulBlog.date}
          </span>
          {console.log(props.data.contentfulBlog)}
          {props.data.contentfulBlog.blogImage && (
            <Img
              className={Style.blogImage}
              fluid={props.data.contentfulBlog.blogImage[0].fluid}
              alt={props.data.contentfulBlog.title}
            />
          )}
          {documentToReactComponents(props.data.contentfulBlog.content.json)}
        </div>
      </Section>
    </Layout>
  )
}



export default BlogPost


import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Banner from '../components/banner/banner.js'
import Section from "../components/section"
import Head from "../components/head.js"
import variables from "../components/variables.js"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import Style from "./blog-post.module.scss"

const Bold = ({ children }) => <span className={Style.boldText}>{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { title, description, file } = node.data.target.fields
      const mimeType = file["en-US"].contentType
      const mimeGroup = mimeType.split("/")[0]

      switch (mimeGroup) {
        case "image":
          return (
            <img
              title={title ? title["en-US"] : null}
              alt={description ? description["en-US"] : null}
              src={file["en-US"].url}
              className={Style.imbedImage}
            />
          )
        case "application":
          return (
            <a
              alt={description ? description["en-US"] : null}
              href={file["en-US"].url}
            >
              {title ? title["en-US"] : file["en-US"].details.fileName}
            </a>
          )
        default:
          return (
            <span style={{ backgroundColor: "red", color: "white" }}>
              {" "}
              {mimeType} embedded asset{" "}
            </span>
          )
      }
    },
  },
}

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
             childrenContentfulBlogContentRichTextNode {
               json
               id
               content
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
          <span className={Style.meta}>
            - Posted on {props.data.contentfulBlog.date} -
          </span>
          {console.log(props.data.contentfulBlog)}
          {props.data.contentfulBlog.blogImage && (
            <Img
              className={Style.blogImage}
              fluid={props.data.contentfulBlog.blogImage[0].fluid}
              alt={props.data.contentfulBlog.title}
            />
          )}
          {documentToReactComponents(
            props.data.contentfulBlog.childrenContentfulBlogContentRichTextNode[0].json, options
          )}
          {/* {documentToReactComponents(props.data.contentfulBlog.content.json)} */}
        </div>
      </Section>
    </Layout>
  )
}



export default BlogPost

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../components/section"
import Layout from "../components/layout"
import Banner from "../components/banner/banner.js"
import variables from "../components/variables.js"
import Head from "../components/head.js"
import Img from "gatsby-image"
const data = useStaticQuery(
  graphql`
    query {
      allContentfulBlog(sort: { order: DESC, fields: date }, limit: 10) {
        nodes {
          content {
            json
          }
          date
          title
          id
          blogImage {
            fluid(maxWidth: 350, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          childContentfulBlogContentRichTextNode {
            id
            content
            json
          }
        }
      }
    }
  `
)

import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import variables from "../variables.js"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const GetBlog = () => {
const data = useStaticQuery(graphql`
  query {
    allContentfulBlog(sort: { order: DESC, fields: date }, limit: 1) {
      nodes {
        content {
          json
        }
      }
    }
  }
`)
    
    return (
        <div>{documentToReactComponents( data.allContentfulBlog.nodes[0].content.json )}</div>
    )
}

export default GetBlog

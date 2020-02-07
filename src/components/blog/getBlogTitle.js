import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const GetBlogTitle = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { order: DESC, fields: date }, limit: 1) {
        nodes {
          title
          date
        }
      }
    }
  `)

  return (
      <h2>{data.allContentfulBlog.nodes[0].title}</h2>
  )
}

export default GetBlogTitle

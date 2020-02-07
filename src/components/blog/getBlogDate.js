import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const GetBlogDate = () => {
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
    <h3>{data.allContentfulBlog.nodes[0].date}</h3>
  )
}

export default GetBlogDate

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import variables from "../variables.js"

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
    // <div>{console.log(data.allContentfulBlog.nodes[0].title)}</div>
    <h3>{data.allContentfulBlog.nodes[0].date}</h3>
  )
}

export default GetBlogDate

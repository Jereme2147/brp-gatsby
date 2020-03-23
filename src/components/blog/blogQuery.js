import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import variables from "../variables.js"
import styles from "./allBlogs.module.scss"

const BlogQuery = ({ id }) => {
  const data = useStaticQuery(graphql`
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
        }
      }
    }
  `)
  return (
    <div>
    {data.allContentfulBlog.nodes.map((item) => {
        if(id === item.id && item.blogImage){
            return (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={item.id}
              >
                <h2>
                  {item.title}
                  <span style={{ fontWeight: "400" }}>
                    {" "}
                    - Click to read more..
                  </span>
                </h2>
                <h3>{item.date}</h3>
                <div className={styles.inner}>
                  {documentToReactComponents(item.content.json)}
                </div>
                <Img
                  key={item.id}
                  fluid={item.blogImage[0].fluid}
                  alt={item.alt}
                  style={{
                    margin: "20px 0",
                    boxShadow: `3px 3px 3px ${variables.black}`,
                    width: "350px",
                  }}
                />
              </div>
            ) 
        }else if(id === item.id) { // so it doesn't break if there's no image. 
            return (
              <div key={item.id}>
                <h2>
                  {item.title}
                  <span style={{ fontWeight: "400" }}>
                    {" "}
                    - Click to read more..
                  </span>
                </h2>
                <h3>{item.date}</h3>
                <div className={styles.inner}>
                  {documentToReactComponents(item.content.json)}
                </div>
              </div>
            )
        }
    })}
    </div>
  )
}

export default BlogQuery

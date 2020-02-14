import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import variables from "../variables.js"
import Img from 'gatsby-image'
import Styles from './getBlogImageStyle.module.scss'

const GetBlogImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { order: DESC, fields: date }, limit: 1) {
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
        if(item.blogImage) {
            return (
              <Img
                key={data.allContentfulBlog.nodes[0].id}
                fluid={data.allContentfulBlog.nodes[0].blogImage[0].fluid}
                alt={data.allContentfulBlog.nodes[0].title}
                // style={{
                //   margin: "20px 0",
                //   boxShadow: `3px 3px 3px ${variables.black}`,
                //   width: "350px"
                // }}
                className={Styles.image}
              />
            )
        }
    })}
      
    </div>
  )
}

export default GetBlogImage

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
            fluid(maxWidth: 550, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <div>
    {data.allContentfulBlog.nodes.map((item) => {
      console.log(data.allContentfulBlog.nodes[0].blogImage[0].fluid)
        if(item.blogImage) {
            return (
              <a
                href={
                  data.allContentfulBlog.nodes[0].blogImage[0].file.url
                }
                target="__BLANK"
              >
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
              </a>
            )
        }
    })}
      
    </div>
  )
}

export default GetBlogImage

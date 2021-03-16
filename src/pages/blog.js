// list all blogs page
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../components/section"
import Layout from "../components/layout"
import Banner from "../components/banner/banner.js"
import variables from "../components/variables.js"
import Head from "../components/head.js"
import Img from "gatsby-image"
import style from "./allBlog.module.scss"
import { Link } from "gatsby"

const AllBlog = () => {
    const data = useStaticQuery(
      graphql`
        query {
          allContentfulBlog(sort: { order: DESC, fields: date }) {
            nodes {
              date
              title
              id
              slug
              blogImage {
                fluid(maxWidth: 350, quality: 90) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      `
    )
    return (
      <Layout>
        <Head title={"Articles"} />
        {/* Need to do a new banner */}
        <Banner banner={variables.blogBanner} />
        <Section>
          <div className={style.containerBlog}>
            <h1>All Articles</h1>
            {data.allContentfulBlog.nodes.map(item => {
              if (item.blogImage) {
                return (
                  <Link to={`/blog/${item.slug}`} className={style.link}>
                    <h2>{item.title}</h2>
                    {console.log(item)}
                    <p>-{item.date}-</p>
                    <Img
                      className={style.blogImage}
                      fluid={item.blogImage[0].fluid}
                    />
                  </Link>
                )
              } else {
                return (
                  <Link to={`/blog/${item.slug}`} className={style.link}>
                    <h2>{item.title}</h2>
                    {console.log(item)}
                    <p>-{item.date}-</p>
                    {/* <Img
                      className={style.blogImage}
                      fluid={item.blogImage[0].fluid}
                    /> */}
                  </Link>
                )
              }
            })}
          </div>
        </Section>
      </Layout>
    )
}

export default AllBlog
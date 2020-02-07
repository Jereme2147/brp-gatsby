import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const FullScreenImage = ({ fullImage }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1900, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
            originalName
          }
        }
      }
    }
  `)
//****** this works for choosing passed in image!!! only 5 fucking hours! */
  return (
      <div>
        {data.allImageSharp.nodes.map((item) => {
          if (item.fluid.originalName === fullImage) {
            return (
              <Img fluid={item.fluid} key={item.fluid.originalName}/>
            )
          }
        })}
      </div>
  )
}

  export default FullScreenImage
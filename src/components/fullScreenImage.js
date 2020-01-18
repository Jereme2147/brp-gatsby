import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const FullScreenImage = ({ fullImage }) => {
  const data = useStaticQuery(graphql`
  query{
    
      allImageSharp {
        nodes{
          fluid(maxWidth: 1900, quality: 100) {
          ...GatsbyImageSharpFluid
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
          if (item.fluid.originalName == fullImage) {
            return (
              <Img fluid={item.fluid} />
            )
          }
        })}
      </div>
  )
}

  export default FullScreenImage
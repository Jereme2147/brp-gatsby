import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
//pass title, ALT as text, style as object in as object. See ServiceList
//full passed in components: "path" "alt text" {style.image} {style.container}
{/* <SmallImage
                path={{
                  title: Variables.truck500,
                  alt: "delivery truck",
                  style: style.image,
                  containerStyle: style.imageContainer,
                }}
              /> */}
const SmallImage = ({ path }) => {
  const data = useStaticQuery(graphql`
  query{
    
      allImageSharp {
        nodes{
          fluid(maxWidth: 600, quality: 50) {
          ...GatsbyImageSharpFluid_withWebp
          originalName
        }
        }
      } 
  }
`)
    // //****** this works for choosing passed in image!!! only 5 fucking hours! */
    return (
        <div style={path.containerStyle}>
            {data.allImageSharp.nodes.map((item) => {
                if (item.fluid.originalName === path.title) {
                    return (
                        <Img 
                            key={path.title}
                            fluid={item.fluid} 
                            alt={path.alt}
                            style={path.style}
                            />
                    )
                }
            })}
           </div> 
     )
}

export default SmallImage
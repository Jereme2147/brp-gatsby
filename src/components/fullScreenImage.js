import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import bannerStyle from "../styles/banner.module.scss"

const FullScreenImage = ({fullImage}) => {
    console.log(fullImage)
    const data = useStaticQuery(graphql`
    query ($fullImage: String){
    fullImage: file(relativePath: { eq: $fullImage }) {
      childImageSharp {
        fluid(maxWidth: 1900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
    const divStyle = {
        width: '100%'
    };
    return (
        // spacer div.  gatsby and flex don't positon just right setting "top"
        <div style={ divStyle }>
            <Img fluid={data.fullImage.childImageSharp.fluid} />
        </div>

    )
}

export default FullScreenImage

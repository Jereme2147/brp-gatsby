//takes props as image banner title. Image should be located within the 'graphics' folder.
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import bannerStyle from "../styles/banner.module.scss"

const Banner = ({banner}) => {
const data = useStaticQuery(graphql`
  query ($banner: String){
    banner: file(relativePath: { eq: $banner }) {
      childImageSharp {
        fluid(maxWidth: 1900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
//IMPORTANT ** these numbers must change if the NAV changes!!!
//for some reason only works with external scss module wtf?
const findTop = () => {
    if(window.innerWidth < 950){
        return (30);
    }else {
        return (75);
    }
}
const top = findTop();
const divStyle = {
    height: `${top + .2 * window.innerHeight}px`,
};
    return (
      // spacer div.  gatsby and flex don't positon just right setting "top"
        <div>
            <div style={divStyle}>
            </div> 
            <div className={bannerStyle.bannerImage}>
              <Img fluid={data.banner.childImageSharp.fluid} />
            </div>
        </div>
        
    )
}

export default Banner

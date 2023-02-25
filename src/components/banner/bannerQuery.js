//see readme
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import bannerStyle from "../../styles/banner.module.scss"

const BannerQuery = ({ banner }) => {
    const data = useStaticQuery(graphql`
      query {
        allImageSharp {
          nodes {
            id
            fluid(maxWidth: 1900, quality: 50) {
              ...GatsbyImageSharpFluid_withWebp
              srcSetWebp
              originalName
            } 
          }
        }
      }
    `)
    //IMPORTANT ** these numbers must change if the NAV changes!!!
    //for some reason only works with external scss module wtf?
    return (
        // spacer div.  gatsby and flex don't positon just right setting "top"
        <div>
            {data.allImageSharp.nodes.map((item) => {
                if (item.fluid.originalName === banner) {
                    return (
                        <div className={bannerStyle.bannerImage} key={banner} >
                            <Img
                                fluid={item.fluid}
                                key={item.id}
                            />
                        </div>
                    )
                }
                else {
                    return <div key={item.id}></div>
                }
            })}

        </div>

    )
}

export default BannerQuery

import React from 'react'
import variables from "../components/variables.js"
import Banner from "../components/banner/banner.js"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../components/section"
import Layout from "../components/layout"
import Img from "gatsby-image"

export const data = graphql`
         query {
           allContentfulProductCategory(sort: {fields: category, order: DESC}) {
                                        edges {
                                             node {
                                                    id
                                                    category
                                                    product {
                                                        id
                                                        name
                                                        vendors {
                                                                name
                                                                url
                                                            }
                                                    }
                                                 categoryImage {
                                                            fluid(maxWidth: 400) {
                                                            ...GatsbyContentfulFluid_withWebp
                                                            }
                                                        }
                                                   
      }
    }
  }
         }
       `
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: true,
        }
    }

    componentDidMount() {
        this.handleWindowSizeChange() // Set width
        window.addEventListener('resize', this.handleWindowSizeChange)
        // this.findCategories();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }
    handleWindowSizeChange = () => {
        if (window.innerWidth < 950) {
            this.setState({ width: true })
        } else {
            this.setState({ width: false })
        }

    }
    //find unique categories and sets state to only unique ones. 

    render() {
        const style = {
            container: {
                width: `${this.state.width ? '95%' : '45%'}`,
                // width: "45%",
                marginTop: "20px",
                padding: "0 5px",
                borderBottom: `3px solid ${variables.blue}`,
                paddingBottom: '10px',
                marginBottom: '20px',
                // textAlign: 'center'
            },
            image: {
                width: "100%",
                borderRadius: "10px",
                boxShadow: `3px 3px 3px ${variables.black}, -2px -2px 2px ${variables.white}`,
            },
            imageContainer: {
                display: "flex",
                flexDirection: "column"
            },
            innerStyle: {
                margin: "10px 0",
                color: `${variables.black}`,
                margin: `20px 0 5px 15px`,
                fontSize: `1.5rem`,
                // width: "100%",
            },
            h1: {
                marginTop: "10px",
                textAlign: "center",
                color: `${variables.blue}`,
                fontSize: "1.5rem", 
                textShadow: `1px 1px 1px ${variables.black}`
            }
        }
        return (
            <Layout>
                <Banner banner={variables.homeBanner} />
                <Section>
                <h1 style={{width: "100%", textAlign: "center", fontSize: "2.5rem", marginTop: "10px",
                            textShadow: `2px 2px 1px ${variables.black}`, color: `${variables.blue}`}}>Products</h1>
                    {this.props.data.allContentfulProductCategory.edges.map((item) => {
                        return (
                            <div style={style.container}>
                                <div style={style.imageContainer}>
                                <Img
                                    fluid={item.node.categoryImage.fluid
                                    }
                                   style={style.image}
                                />
                                </div>
                                <h1 key={`${item.node.id}${item.node.category}`}style={style.h1}>{item.node.category}</h1>
                                <ul>
                                    {item.node.product.vendors.map((thing) => {
                                        return (
                                            <li key={thing.id} style={style.innerStyle}>
                                                <a key={`${thing.id}${thing.url}`} 
                                                    href={thing.url} rel="noopener noreferrer">
                                                    <h2 key={`${thing.id}${thing.name}`}>{thing.name}</h2>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                                
                            </div>)
                    })}
                </Section>
            </Layout>
        )
    }
}

export default Products
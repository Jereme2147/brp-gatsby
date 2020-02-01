import React from 'react'
import variables from "../components/variables.js"
import Banner from "../components/banner/banner.js"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../components/section"
import Layout from "../components/layout"
import Category from "../components/products/category.js"

export const data = graphql`
         query {
           allContentfulVendor(sort: { fields: category }) {
             edges {
               node {
                 category
                 id
                 url
                 name
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
            categories: this.findCategories(),
        }
    }

    componentDidMount() {
        this.handleWindowSizeChange() // Set width
        window.addEventListener('resize', this.handleWindowSizeChange)
        // this.findCategories();
    }
    componentWillMount() {
      this.findCategories();
    }
    UNSAFE_componentWillUnmount() {
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
    findCategories = () => {
        const stuff = []
        let catObjs = []
        this.props.data.allContentfulVendor.edges.map(item => {
            let go = 0
            stuff.map(thing => {
                if(thing[0] === item.node.category[0]){
                    go = 1
                }else {
                    go = 0
                }
            })
            if(go == 0){
                stuff.push(item.node.category)
            }
          })
          let stuff2 = []
          stuff.map(another => {
            stuff2.push(another[0])
          })
          //puts all products into an array of objects by categorie
          stuff2.map(thing => { 
            let nodeTemp = []//mapping through unique categories
            this.props.data.allContentfulVendor.edges.map(item2 => {
              //mapping through all products
              if(thing === item2.node.category[0]){
                nodeTemp.push(item2.node)
              }
            })
            catObjs.push(nodeTemp)
          })
          console.log(catObjs)
          return catObjs;
    }

    render() {
        const style = {
          container: {
            width: "40%",
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 5px",
            fontSize: `${this.state.width === true ? ".8rem" : ".8rem"}`
          },
          category: {
            width: "100%",
          },
          innerStyle: {
            width: "100%",
          }
        }
        return (
          <Layout>
            <Banner banner={variables.homeBanner} />
            <Section>
              {this.state.categories.map((cat) => {
                return(//I am the container for each Category
                  <div style={style.container}>  
                    <div style={style.innerStyle
                    //I am the inner wrapper 
                    }>
                      <h2 style={style.category}>{cat[0].category
                      //I show the category title
                      }</h2>
                      <Category category={cat} />
                    </div>
                  </div>
                )
              })}
            </Section>
          </Layout>
        )
    }
}

export default Products
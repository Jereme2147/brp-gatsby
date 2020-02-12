import React from 'react'
import variables from "../components/variables.js"
import GetBlog from "../components/blog/getBlog.js"
import GetBlogTitle from "../components/blog/getBlogTitle.js"
import GetBlogDate from "../components/blog/getBlogDate.js"
import GetBlogImage from "../components/blog/getBlogImage.js"
import { Link } from 'gatsby';


class BlogSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: true,
        }
    }

    componentDidMount() {
        this.handleWindowSizeChange() // Set width
        window.addEventListener('resize', this.handleWindowSizeChange)
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

    render() {
        const styleContainer = {
            display: 'flex',
            flexDirection: 'column',
            padding: `${this.state.width ? '20px 5px' : '30px 10px'}`
        }
        const styleTitle = {
            fontSize: `${this.state.width ? '1.5rem' : '2rem'}`,
            borderBottom: `2px solid ${variables.blue}`,
            paddingBottom: '15px',
        }
        const styleMeta = {
            borderLeft: `5px solid ${variables.red}`,
            padding: '10px 5px',
            marginTop: '10px'
        }
        const styleBody = {
            marginTop: '10px',
            fontSize: '1.4rem',
        }
        return (
          <div style={styleContainer}>
            <h1 style={styleTitle}>Blue Ridge Propane Articles</h1>
            <div style={styleMeta}>
              <GetBlogTitle />
              <GetBlogDate /> 
            </div>
            <GetBlogImage />
            <div style={styleBody}>
              <GetBlog />
            </div>
            <Link 
            to={"/blog"}
            style={{width: "100%", textAlign: "center", margin: "20px 0"}}
            >
              <h2 style={{ fontSize: "1.5rem"}}>-All Articles-</h2>
            </Link>
          </div>
        )
    }
}

export default BlogSingle
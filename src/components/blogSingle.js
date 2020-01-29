import React from 'react'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
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
        console.log("componentDidMount")
        this.handleWindowSizeChange() // Set width
        window.addEventListener('resize', this.handleWindowSizeChange)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }
    handleWindowSizeChange = () => {
        console.log(window.innerWidth, "************* no enter")
        if (window.innerWidth < 950) {
            console.log(window.innerWidth, "handle size < 950", this.state.width)
            this.setState({ width: true })
        } else {
            console.log(window.innerWidth, "failed query")
            this.setState({ width: false })
        }

    }

    render() {
        const styleContainer = {
            display: 'flex',
            flexDirection: 'column',
            padding: `${this.state.width == true ? '20px 5px' : '30px 10px'}`
        }
        const styleTitle = {
            fontSize: `${this.state.width == true ? '1.5rem' : '2rem'}`,
            borderBottom: `2px solid ${variables.blue}`,
            paddingBottom: '15px',
        }
        const styleMeta = {
            borderLeft: `5px solid ${variables.red}`,
            padding: '10px 5px',
            marginTop: '10px'
        }
        const styleBody = {
            marginTop: '10px'
        }
        return (
          <div style={styleContainer}>
            <h1 style={styleTitle}>Blue Ridge Propane Blog</h1>
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
              <h2>-All Articles-</h2>
            </Link>
          </div>
        )
    }
}

export default BlogSingle
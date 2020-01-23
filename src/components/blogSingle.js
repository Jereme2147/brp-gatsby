import React from 'react'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import variables from "../components/variables.js"


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
                <h1 style={styleTitle}>
                    Blue Ridge Propane Blog
                </h1>
                <div style={styleMeta}>
                    <h2>BLOG TITLE</h2>
                    <h3>Blog date</h3>
                </div>
                <div style={styleBody}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Donec adipiscing tristique risus nec. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Vestibulum lorem sed risus ultricies tristique nulla. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Adipiscing elit ut aliquam purus sit amet luctus. Congue nisi vitae suscipit tellus mauris a. Dictum non consectetur a erat. Euismod lacinia at quis risus sed vulputate odio ut. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Elit pellentesque habitant morbi tristique senectus et netus. Purus gravida quis blandit turpis cursus in hac. At erat pellentesque adipiscing commodo elit. Risus feugiat in ante metus. Imperdiet sed euismod nisi porta lorem.
                    </p>
                </div>
            </div>
        )
    }
}

export default BlogSingle
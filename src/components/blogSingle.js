import React from 'react'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import variables from "../components/variables.js"

class BlogSingle extends React.Component {
    constructor(props){
        super(props);
        this.navElement = React.createRef();
        this.state = {
            blogContainer: {
                display: 'flex',
                flexDirection: 'column',
                padding: `${this.findWidth() ? '20px 5px' : '30px 10px'}`
            },
            title: {
                fontSize: `${this.findWidth() ? '1.5rem' : '2rem'}`,
                borderBottom: `2px solid ${variables.blue}`,
                paddingBottom: '15px',
            },
            meta: {
                borderLeft: `5px solid ${variables.red}`,
                padding: '10px 5px',
                marginTop: '10px'
            },
            body: {
                marginTop: '10px' //probably need an SCSS file for images
            }
        }
        this.findWidth = this.findWidth.bind(this)
    }
    //media query "true" = mobile
    findWidth = () => {
        if (window.innerWidth < 950) {
            return (true);
        } else {
            return (false);
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render(props) {
        return (
            <div style={ this.state.blogContainer }>
                <h1 style={ this.state.title}>
                    Blue Ridge Propane Blog
                </h1>
                <div style={ this.state.meta }>
                    <h2>BLOG TITLE</h2>
                    <h3>Blog date</h3>
                </div>
                <div style={ this.state.body}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Donec adipiscing tristique risus nec. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Vestibulum lorem sed risus ultricies tristique nulla. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Adipiscing elit ut aliquam purus sit amet luctus. Congue nisi vitae suscipit tellus mauris a. Dictum non consectetur a erat. Euismod lacinia at quis risus sed vulputate odio ut. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Elit pellentesque habitant morbi tristique senectus et netus. Purus gravida quis blandit turpis cursus in hac. At erat pellentesque adipiscing commodo elit. Risus feugiat in ante metus. Imperdiet sed euismod nisi porta lorem.
                    </p>
                </div>
            </div>
        )
    }
}

export default BlogSingle;
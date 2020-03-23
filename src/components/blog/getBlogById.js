import React from "react"
import BlogQuery from "./blogQuery.js"
import BlogQueryExpanded from './blogQuery-expanded.js'

class BlogById extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '100px',
            overflow: 'hidden',
            padding: '20px 5px',
            fontSize: '1.5rem',
            marginBottom: '30px',
        }
    }

    componentDidMount() {
    }
    componentWillUnmount() {
    }
    click = () => {
        if(this.state.height === '100px'){
            this.setState({
              height: "auto"
            })
        }else {
            this.setState({
            height: '100px',
            overflow: 'hidden'
        })
        }
    }
    render() {
            return (
              <div style={this.state} onClick={this.click} key={this.props.id}>
                <BlogQuery id={this.props.id} />
              </div>
            )
        }
        
    
    
}


export default BlogById
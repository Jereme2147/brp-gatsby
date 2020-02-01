import React from "react"
import BlogQuery from "./blogQuery"

class BlogById extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '100px',
            overflow: 'hidden',
            padding: '20px 5px',
            fontSize: '1.5rem',
            marginBottom: '30px'
        }
    }

    componentDidMount() {
    }
    componentWillUnmount() {
    }
    click = () => {
        console.log("clicked")
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
            <div 
                style={this.state}
                onClick={this.click}>   
                <BlogQuery id={this.props.id} />
            </div>
        )
       
    }
}


export default BlogById
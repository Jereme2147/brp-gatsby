import React from "react"
import BlogQuery from "./blogQuery.js"
// import BlogQueryExpanded from './blogQuery-expanded.js'
import style from "./blogPage.module.scss"

class BlogById extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '150px',
            overflow: 'hidden',
            padding: '20px 5px',
            // fontSize: '1.5rem',
            marginBottom: '30px',
        }
    }

    componentDidMount() {
    }
    componentWillUnmount() {
    }
    click = () => {
        if(this.state.height === '150px'){
            this.setState({
              height: "auto"
            })
        }else {
            this.setState({
            height: '150px',
            overflow: 'hidden'
        })
        }
    }
    render() {
            return (
              <div style={this.state} className={style.main}onClick={this.click} key={this.props.id}>
                <BlogQuery id={this.props.id} />
              </div>
            )
        }
        
    
    
}


export default BlogById
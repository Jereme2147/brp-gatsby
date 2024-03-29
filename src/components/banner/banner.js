//see readme file
import React from "react"
import BannerQuery from "./bannerQuery.js"

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 30,
            banner: this.props.banner,
        }
    }
 
    componentDidMount() {
        this.handleWindowSizeChange()  
        window.addEventListener('resize', this.handleWindowSizeChange)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }
    handleWindowSizeChange = () => {
        if (window.innerWidth < 950) {
            this.setState({ top: 50 + .2 * window.innerHeight })
        } else {
            this.setState({ top: 75 + .2 * window.innerHeight })
        }

    }

    render() {
        const style = {
            height: `${this.state.top}px`,
        }
        return (
                <div>
                <div style={style}>
                </div>
                    <BannerQuery banner={this.state.banner} />
                </div>

        )
    }
}

export default Banner
import React, {Component} from 'react'
import Link from 'gatsby-link'
import PageTransition from '../components/PageTransition'

class SecondPage extends Component {
    constructor() {
        super();
        this.state = { in: true }
    }

    componentWillUnmount() {
      this.setState({in: false})
    }

    render() {
        return (
            <PageTransition
                timeout={350}
                classNames="fade"
                shouldShow={this.state.in}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 offset-sm-1">
                            <h1>Hi from the second page</h1>
                            <p>Welcome to page 2</p>
                            <p><Link to="/">Go back to the homepage</Link></p>
                            <p><Link to="/posts/how-to-make-styled-checkboxes">Blogpost</Link></p>
                        </div>
                    </div>
                </div>
            </PageTransition>
        )
    }
}

export default SecondPage

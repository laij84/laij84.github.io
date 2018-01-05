import Link from 'gatsby-link'
import React, { Component } from 'react';
import PageTransition from '../components/PageTransition'

class IndexPage extends Component {
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
                timeout={350 }
                classNames="fade"
                shouldShow={this.state.in}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 offset-sm-1">
                            <h1>Hi People</h1>
                            <p>Welcome to your new Gatsby site.</p>
                            <p>Now go build something great.</p>
                            <p><i className="icon-user"></i></p>
                            <p><Link to="/page-2/">Go to page 2</Link></p>
                            <p><Link to="/posts/how-to-make-styled-checkboxes">Blogpost</Link></p>
                        </div>
                    </div>
                </div>
            </PageTransition>
        )
    }
}

export default IndexPage

export const IndexPageQuery = graphql`
query IndexPageQuery {
    allContentfulPost(filter: {}) {
        edges {
            node {
                id
                title
                published
                slug
                categories {
                    id
                    name
                }
                tags {
                    id
                    name
                }
                content {
                    content
                }
            }
        }
    }
}
`
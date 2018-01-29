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
                <div className="pageWrap --home">
                    <div className="homePage__cont">
                        <h1 className="homePage__title">Jason Lai</h1>
                        <p className="homePage__subtitle">Web Developer</p>
                    </div>
                    <div className="pageWrap__ovly"></div>
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
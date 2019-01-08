// import Link from 'gatsby-link'
import React, { Component } from 'react'
import { graphql } from 'gatsby'

class IndexPage extends Component {
    constructor() {
        super()
        this.state = { pageIn: true }
    }

    componentWillUnmount() {
        this.setState({ pageIn: false })
    }

    render() {
        const { pageIn } = this.state
        return (
            <div className="pageWrap --home">
                <div className="homePage__cont">
                    <h1 className="homePage__title">Jason Lai</h1>
                    <p className="homePage__subtitle">Web Developer</p>
                </div>
                <div className="pageWrap__ovly" />
            </div>
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

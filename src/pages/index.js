import Link from 'gatsby-link'
import React, { Component } from 'react';

class IndexPage extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        console.log(this.props.data.allContentfulPost.edges[0].node);
    }

    render() {
        return (
            <div>
                <h1>Hi People</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <Link to="/page-2/">Go to page 2</Link>
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
              tags{
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
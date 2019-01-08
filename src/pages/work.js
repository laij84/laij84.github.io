// import Link from 'gatsby-link'
import React, { Component } from 'react'
// import Layout from '../layouts/Layout'
import PageTransition from '../components/PageTransition'

class WorkPage extends Component {
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
            <div className="pageWrap --about">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 offset-sm-1">
                            <div className="section">
                                <h1>Work</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkPage

// export const WorkPageQuery = graphql`
// query AboutPageQuery {
//     allContentfulPost(filter: {}) {
//         edges {
//             node {
//                 id
//                 title
//                 published
//                 slug
//                 categories {
//                     id
//                     name
//                 }
//                 tags {
//                     id
//                     name
//                 }
//                 content {
//                     content
//                 }
//             }
//         }
//     }
// }
// `

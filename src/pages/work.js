// import Link from 'gatsby-link'
import React, { Component } from 'react'
import Layout from '../components/Layout'
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
        const { location } = this.props
        return (
            <Layout location={location}>
                <PageTransition
                    timeout={350}
                    classNames="fade"
                    shouldShow={pageIn}
                >
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
                </PageTransition>
            </Layout>
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

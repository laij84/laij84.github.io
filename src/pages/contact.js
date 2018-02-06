import Link from 'gatsby-link'
import React, { Component } from 'react';
import PageTransition from '../components/PageTransition'

class ContactPage extends Component {
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
                <div className="pageWrap --about">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">
                                <div className="section">
                                    <h1>Contact</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageTransition>
        )
    }
}

export default ContactPage

// export const ContactPageQuery = graphql`
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
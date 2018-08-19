import React, { Component } from 'react'
import PageTransition from '../components/PageTransition'

class NotFoundPage extends Component {
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
            <PageTransition timeout={350} classNames="fade" shouldShow={pageIn}>
                <div className="pageWrap --about">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">
                                <div className="section">
                                    <h1>404 Error - Page not found</h1>
                                    <p>
                                        You just hit a route that doesn&#39;t
                                        exist...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageTransition>
        )
    }
}

export default NotFoundPage

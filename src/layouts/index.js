import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import TransitionGroup from 'react-transition-group/TransitionGroup' 
import PageTransition from '../components/PageTransition'

import './index.css'
import '../assets/scss/style.scss'

const Nav = () => (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__listItem">
                <Link className="nav__link" to="/">
                    <i className="icon-home"></i>
                    <span className="nav__linkTitle">Home</span>
                </Link>
            </li>
            <li className="nav__listItem">
                <Link className="nav__link" to="/">
                    <i className="icon-user"></i>
                    <span className="nav__linkTitle">About</span>
                </Link>
            </li>
            <li className="nav__listItem">
                <Link className="nav__link" to="/">
                    <i className="icon-code"></i>
                    <span className="nav__linkTitle">Work</span>
                </Link>
            </li>
            <li className="nav__listItem">
                <Link className="nav__link" to="/">
                    <i className="icon-blog"></i>
                    <span className="nav__linkTitle">Blog</span>
                </Link>
            </li>
            <li className="nav__listItem">
                <Link className="nav__link" to="/">
                    <i className="icon-mail"></i>
                    <span className="nav__linkTitle">Contact</span>
                </Link>
            </li>
        </ul>
        <ul className="nav__list -social">
            <li className="nav__listItem -social">
                <a href="https://twitter.com/LaiJase" className="nav__link" to="/">
                    <i className="icon-twitter"></i>
                </a>
            </li>
            <li className="nav__listItem -social"><i className="icon-github"></i></li>
            <li className="nav__listItem -social"><i className="icon-linkedin"></i></li>
        </ul>
    </nav>
)

class TemplateWrapper extends Component {
    constructor() {
        super()
        this.state = {
          in: true
        }
    }

    render() {
        const getTransitionState = this.getTransitionState;
        return (
        <div>
            <Helmet
                title="Gatsby Default Starter"
                meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
                ]}
            />
            <Nav />
            <TransitionGroup>
                {this.props.children({...this.props, getTransitionState})}
            </TransitionGroup>
        </div>
        )
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import TransitionGroup from 'react-transition-group/TransitionGroup' 
import PageTransition from '../components/PageTransition'

import './index.css'
import '../assets/scss/style.scss'

class TemplateWrapper extends Component {
    constructor() {
        super()
        this.state = {
          in: true,
          navOpen: false
        }
    }

    toggleNav = () => {
        this.setState({navOpen: !this.state.navOpen});
        console.log(this.state.navOpen);
    }

    renderNav = () => {
        return (
            <nav className={this.state.navOpen ? 'nav --open' : 'nav'}>
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
                            <span className="nav__linkTitle -social">Twitter</span>
                        </a>
                    </li>
                    <li className="nav__listItem -social">
                        <a href="https://github.com/laij84" className="nav__link" to="/">
                            <i className="icon-github"></i>
                            <span className="nav__linkTitle -social">Github</span>
                        </a>
                    </li>
                    <li className="nav__listItem -social">
                        <a href="https://twitter.com/LaiJase" className="nav__link" to="/">
                            <i className="icon-linkedin"></i>
                            <span className="nav__linkTitle -social">Linkedin</span>
                        </a>
                    </li>
                </ul>
                <div className="nav__mobileToggle" onClick={this.toggleNav}>
                    <span className="nav__mobileToggleIcon"></span>
                </div>
            </nav>
        )
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
            {this.renderNav()}
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

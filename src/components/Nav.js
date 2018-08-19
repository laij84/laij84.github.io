import Link from 'gatsby-link'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            navOpen: false,
        }
    }

    toggleNav = e => {
        e.preventDefault()
        this.setState(prevState => ({ navOpen: !prevState.navOpen }))
    }

    closeMobileNav = () => {
        if (window.matchMedia('(max-width: 777px)').matches) {
            setTimeout(() => {
                this.setState({ navOpen: false })
            }, 600)
        }
    }

    render() {
        const {
            location: { pathname },
        } = this.props

        const { navOpen } = this.state

        return (
            <nav className={navOpen ? 'nav --open' : 'nav'}>
                <ul className="nav__list">
                    <li
                        className={
                            pathname === '/'
                                ? 'nav__listItem --active'
                                : 'nav__listItem'
                        }
                    >
                        <Link
                            className="nav__link"
                            to="/"
                            onClick={this.closeMobileNav}
                        >
                            <i className="icon-home" />
                            <span className="nav__linkTitle">Home</span>
                        </Link>
                    </li>
                    <li
                        className={
                            pathname.replace(/(\/#|\/|#)$/, '') === '/about'
                                ? 'nav__listItem --active'
                                : 'nav__listItem'
                        }
                    >
                        <Link
                            className="nav__link"
                            to="/about"
                            onClick={this.closeMobileNav}
                        >
                            <i className="icon-user" />
                            <span className="nav__linkTitle">About</span>
                        </Link>
                    </li>
                    <li
                        className={
                            pathname.replace(/(\/#|\/|#)$/, '') === '/work'
                                ? 'nav__listItem --active'
                                : 'nav__listItem'
                        }
                    >
                        <Link
                            className="nav__link"
                            to="/work"
                            onClick={this.closeMobileNav}
                        >
                            <i className="icon-code" />
                            <span className="nav__linkTitle">Work</span>
                        </Link>
                    </li>
                    <li
                        className={
                            pathname.replace(/(\/#|\/|#)$/, '') === '/blog'
                                ? 'nav__listItem --active'
                                : 'nav__listItem'
                        }
                    >
                        <Link
                            className="nav__link"
                            to="/blog"
                            onClick={this.closeMobileNav}
                        >
                            <i className="icon-blog" />
                            <span className="nav__linkTitle">Blog</span>
                        </Link>
                    </li>
                    <li
                        className={
                            pathname.replace(/(\/#|\/|#)$/, '') === '/contact'
                                ? 'nav__listItem --active'
                                : 'nav__listItem'
                        }
                    >
                        <Link
                            className="nav__link"
                            to="/contact"
                            onClick={this.closeMobileNav}
                        >
                            <i className="icon-mail" />
                            <span className="nav__linkTitle">Contact</span>
                        </Link>
                    </li>
                </ul>
                <ul className="nav__list -social">
                    <li className="nav__listItem -social">
                        <a
                            href="https://twitter.com/LaiJase"
                            className="nav__link"
                            to="/"
                        >
                            <i className="icon-twitter" />
                            <span className="nav__linkTitle -social">
                                Twitter
                            </span>
                        </a>
                    </li>
                    <li className="nav__listItem -social">
                        <a
                            href="https://github.com/laij84"
                            className="nav__link"
                            to="/"
                        >
                            <i className="icon-github" />
                            <span className="nav__linkTitle -social">
                                Github
                            </span>
                        </a>
                    </li>
                    <li className="nav__listItem -social">
                        <a
                            href="https://twitter.com/LaiJase"
                            className="nav__link"
                            to="/"
                        >
                            <i className="icon-linkedin" />
                            <span className="nav__linkTitle -social">
                                Linkedin
                            </span>
                        </a>
                    </li>
                </ul>
                <button
                    className="nav__mobileToggle"
                    onClick={this.toggleNav}
                    aria-label="Toggle Menu"
                    type="button"
                >
                    <span className="nav__mobileToggleIcon" />
                </button>
            </nav>
        )
    }
}

export default Nav

Nav.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

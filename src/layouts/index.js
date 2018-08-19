import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Nav from '../components/Nav'

import './index.css'
import '../assets/scss/style.scss'

const TemplateWrapper = props => {
    const { children } = props
    return (
        <div>
            <Helmet
                title="Jason Lai"
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
            />
            <Nav {...props} />
            <TransitionGroup>{children({ ...props })}</TransitionGroup>
        </div>
    )
}

TemplateWrapper.propTypes = {
    children: PropTypes.func.isRequired,
}

export default TemplateWrapper

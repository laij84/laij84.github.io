import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Nav from './Nav'

import '../assets/scss/index.scss'
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
            <TransitionGroup>{children}</TransitionGroup>
        </div>
    )
}

TemplateWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TemplateWrapper

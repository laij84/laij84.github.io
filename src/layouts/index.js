import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Nav from '../components/Nav'

import '../assets/scss/style.scss'

const TemplateWrapper = props => {
    const { children, location } = props

    return (
        <div>
            <Helmet
                title="Jason Lai"
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
            />
            <Nav location={location} />
            {children}
        </div>
    )
}

TemplateWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TemplateWrapper

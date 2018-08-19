import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import PropTypes from 'prop-types'

const PageTransition = ({ timeout, classNames, shouldShow, children }) => (
    <CSSTransition timeout={timeout} classNames={classNames} in={shouldShow}>
        {children}
    </CSSTransition>
)

PageTransition.propTypes = {
    timeout: PropTypes.number.isRequired,
    classNames: PropTypes.string.isRequired,
    shouldShow: PropTypes.bool.isRequired,
    children: PropTypes.node,
}

PageTransition.defaultProps = {
    children: null,
}

export default PageTransition

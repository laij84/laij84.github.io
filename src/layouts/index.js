import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import TransitionGroup from 'react-transition-group/TransitionGroup' 
import Nav from '../components/Nav'

import './index.css'
import '../assets/scss/style.scss'

class TemplateWrapper extends Component {
    constructor() {
        super()
        this.state = {
          in: true,
        }
    }

    render() {
        const getTransitionState = this.getTransitionState;
        return (
        <div>
            <Helmet
                title="Jason Lai"
                meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
                ]}
            />
            <Nav {...this.props}/>
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

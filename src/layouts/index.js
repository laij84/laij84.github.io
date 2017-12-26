import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import RouteTransition from '../components/RouteTransition'

import './index.css'
import '../assets/scss/style.scss'
import hljs from 'highlight.js'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Gatsby
            </Link>
          </h1>
        </div>
      </div>
    </div>
  </div>
)

class TemplateWrapper extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    hljs.initHighlightingOnLoad();
  }
  
  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <RouteTransition pathname={this.props.location.pathname}>
              {this.props.children()}
              </RouteTransition>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

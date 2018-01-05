import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

export default class PageTransition extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <CSSTransition
              timeout={this.props.timeout}
              classNames={this.props.classNames}
              in={this.props.shouldShow}>
              {this.props.children}
            </CSSTransition>
        )  
    }
}

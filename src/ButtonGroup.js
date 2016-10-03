import React from 'react'
import classNames from 'classnames'

export default class ButtonGroup extends React.Component {

  static get propTypes() {
    return {
      round: React.PropTypes.bool,
      radius: React.PropTypes.bool,
      even: React.PropTypes.number,
      stack: React.PropTypes.bool,
      stackForSmall: React.PropTypes.bool,
    }
  }

  static get defaultProps() {
    return {
      round: false,
      radius: false,
      even: null,
      stack: false,
      stackForSmall: false,
    }
  }

  get className() {
    let classNamesObject = {
      'RevButtonGroup': true,
      'button-group': true,
      'RevButtonGroup--round': this.props.round,
      'round': this.props.round,
      'RevButtonGroup--radius': this.props.radius,
      'radius': this.props.radius,
      'RevButtonGroup--stack': this.props.stack,
      'stack': this.props.stack,
      'RevButtonGroup--stackForSmall': !this.stack && this.props.stackForSmall,
      'stack-for-small': !this.stack && this.props.stackForSmall,
    }
    if(this.props.even != null) {
      classNamesObject[`even-${this.props.even}`] = true
    }
    return classNames(this.props.className, classNamesObject)
  }

  render() {
    return <ul className={this.className}>
      {React.Children.map(this.props.children, (child, i) => <li key={i}>{child}</li>)}
    </ul>
  }
}
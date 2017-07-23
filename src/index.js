import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './style.css'
import assign from 'object-assign'
import cx from 'classnames'

export default class Progress extends Component {
  static displayName = 'rc-progress'
  static defaultProps = {
    color: '#29d',
    inc: 0
  }
  static propTypes = {
    inc: function (props, propName) {
      let inc = props[propName]
      if (typeof inc !== 'number') throw new Error(propName + ' should be number')
      if (inc < 0 || inc > 1) throw new Error(propName + 'shoudl be 0 to 1')
    },
    percent: PropTypes.number.isRequired,
    color: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {percent: props.percent}
  }
  componentDidMount() {
    if (this.state.percent < 1) this.start()
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  start() {
    clearInterval(this.interval)
    let p = this.state.percent
    let inc = this.props.inc
    if (!inc) return
    this.interval = window.setInterval(function() {
      p = this.state.percent + inc/5
      if (p >= 0.95) window.clearInterval(this.interval)
      this.setState({
        percent: p
      })
    }.bind(this), 200)
  }
  componentWillReceiveProps(props) {
    let p = props.percent
    let sp = this.state.percent
    if (p > 0 && p < sp && sp < 1) return
    this.setState({
      percent: p
    })
    if (p > 1 || p < 0) return
    this.start()
  }
  render() {
    let props = this.props
    let p = props.percent
    let styles = assign({
      backgroundColor: props.color,
      boxShadow: '0 0 4px ' + props.color
    }, props.style, {
      width: (100*this.state.percent) + '%',
    })
    let clz = cx(props.className, style.progress, {
      [style.hide]: p >= 1
    })
    return <div className={clz} style={styles}/>
  }
}

import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: "#FFF"}}
      ></div>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div onClick={this.props.handleColorChange}
        className="child"
        style={{backgroundColor: "#FFF"}}
      ></div>
    )
  }
}

export default Child

import React, { Component } from 'react'

import "../css/style.css"

export class Loader extends Component {
  render() {
    return (
        <div className="overlay">
        <span className="loader"></span>
        </div>
    )
  }
}

export default Loader

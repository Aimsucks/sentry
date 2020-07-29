import React, { Component } from 'react'

export default class Login extends Component {
  render () {
    return (
      <>
        <button onClick={this.handleButtonClick}>Add Character</button>
      </>
    )
  }

  handleButtonClick = () => {
    window.open('http://localhost:5000/auth/eve', '_self')
  };
}

import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Login extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render () {
    const { authenticated } = this.props
    return (
      <>
        {authenticated ? (
          <button onClick={this.handleLogoutClick}>Logout</button>
        ) : (
          <button onClick={this.handleLoginClick}>Login</button>
        )}
      </>
    )
  }

  handleLoginClick = () => {
    window.open('http://localhost:5000/auth/discord', '_self')
  };

  handleLogoutClick = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
    this.props.onNotAuthenticated()
  };
}

import React, { Component } from 'react'

import User from './User'
import Characters from './characters/Characters'
import Footer from './characters/Footer'

export default class Profile extends Component {
  render () {
    const { user, onNotAuthenticated } = this.props
    return (
      <>
        <User user={user.discord} onNotAuthenticated={onNotAuthenticated} />
        <Characters />
        <Footer />
      </>
    )
  }
}

import React, { Component } from 'react'

class User extends Component {
  render () {
    const { user } = this.props

    return (
      <>
        <h1>User Account</h1>
        <img src={user.avatar} alt='' />
        <p>{user.username}#{user.discriminator}</p>
      </>
    )
  }
}

export default User

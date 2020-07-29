import React, { Component } from 'react'
import axios from 'axios'

import User from './User'
import Characters from './Characters'
import Login from './Login'

class Profile extends Component {
  state = {
    authenticated: false,
    user: {}
  }

  handleNotAuthenticated = () => {
    this.setState({ authenticated: false })
  }

  componentDidMount () {
    this.getUser()
  }

  getUser = () => {
    axios.get('/auth/login/success')
      .then(res => {
        if (res.data.success) {
          this.setState({
            authenticated: true,
            user: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    const { user, authenticated } = this.state
    return (
      <>
        {authenticated ? (
          <>
            <User user={user.discord} />
            <Characters /><br />
            <Login authenticated={authenticated} onNotAuthenticated={this.handleNotAuthenticated} />
          </>
        ) : (
          <Login authenticated={authenticated} onNotAuthenticated={this.handleNotAuthenticated} />
        )}
      </>
    )
  }
}

export default Profile

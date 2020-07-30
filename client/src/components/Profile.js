import React, { Component } from 'react'
import axios from 'axios'

import User from './User'
import Characters from './Characters'
import Login from './Login'
import Footer from './Footer'

import { Layout, Row, Col } from 'antd'
const { Content } = Layout

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
      <Layout className='bg layout'>
        <Content className='content-top-padding'>
          <Row justify='center'>
            <Col xs={23} sm={23} md={12} lg={12} xl={8} xxl={6}>
              {authenticated ? (
                <>
                  <User user={user.discord} onNotAuthenticated={this.handleNotAuthenticated} />
                  <Characters />
                  <Footer />
                </>
              ) : (
                <Login />
              )}
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Profile

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

import Profile from './components/Profile'
import Admin from './components/admin/Admin'

import { Layout, Row, Col, Menu } from 'antd'
import { HomeOutlined, SettingOutlined } from '@ant-design/icons'
const { Content } = Layout

export default class AppRouter extends Component {
  state = {
    authenticated: false,
    user: {},
    current: 'home'
  }

  handleNotAuthenticated = () => {
    this.setState({ authenticated: false })
  }

  handleNavigationClick = e => {
    this.setState({ current: e.key })
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
        } else {
          window.open('http://localhost:5000/auth/discord', '_self')
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    const { authenticated, user, current } = this.state
    return (
      <Router>
        <Layout className='bg layout'>
          <Content className='content-top-padding'>
            <Row justify='center'>
              <Col span={12}>
                {authenticated && user.guilds.length > 0 ? (
                  <Menu
                    onClick={this.handleNavigationClick}
                    selectedKeys={[current]}
                    mode='horizontal'
                    style={{
                      marginBottom: 30,
                      textAlign: 'center',
                      borderBottom: 0,
                      background: 0
                    }}
                  >
                    <Menu.Item key='home' icon={<HomeOutlined />}>
                      Home
                      <Link to='/' />
                    </Menu.Item>
                    <Menu.Item key='admin' icon={<SettingOutlined />}>
                      Admin
                      <Link to='/admin' />
                    </Menu.Item>
                  </Menu>
                ) : ''}
                <Switch>
                  {authenticated ? (
                    <>
                      <Route exact path='/'>
                        <Profile user={user} onNotAuthenticated={this.handleNotAuthenticated} />
                      </Route>
                      <Route exact path='/admin'>
                        <Admin guilds={user.guilds} />
                      </Route>
                    </>
                  )
                    : ''}
                </Switch>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Router>
    )
  }
}

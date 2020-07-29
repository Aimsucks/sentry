import React, { Component } from 'react'

import { Row, Col, Typography, Avatar, Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

const { Title } = Typography

class User extends Component {
  handleLogoutClick = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
    this.props.onNotAuthenticated()
  };

  render () {
    const { user } = this.props
    return (
      <>
        <Row type='flex' style={{ alignItems: 'center' }} className='centered-text'>
          <Col span={4}>
            <Avatar size={80} src={user.avatar} style={{ marginRight: 10 }} />
          </Col>
          <Col style={{ paddingRight: 25 }}>
            <Row type='flex' style={{ alignItems: 'bottom' }}>
              <Col>
                <Title className='no-title-margin'>{user.username}</Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Title level={3} type='secondary' className='no-title-margin'>#{user.discriminator}</Title>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Button type='ghost' icon={<LogoutOutlined />} shape='circle' size='large' onClick={this.handleLogoutClick} />
          </Col>
        </Row>
      </>
    )
  }
}

export default User

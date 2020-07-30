import React, { Component } from 'react'

import { Row, Col, Typography, Avatar } from 'antd'

const { Title } = Typography

class User extends Component {
  render () {
    const { user } = this.props
    return (
      <>
        <Row type='flex' style={{ alignItems: 'center' }} className='centered-text row-content-justify-between'>
          <Col span={6}>
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
        </Row>
      </>
    )
  }
}

export default User

import React, { Component } from 'react'

import { Row, Col, Typography, Avatar } from 'antd'

const { Title } = Typography

export default class User extends Component {
  render () {
    const { user } = this.props
    return (
      <>
        <Row justify='center' align='middle' type='flex' style={{ alignItems: 'center' }} className='centered-text row-content-justify-between'>
          <Col>
            <Avatar size={80} src={user.avatar} style={{ marginRight: 10 }} />
          </Col>
          <Col style={{ marginLeft: 10 }}>
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

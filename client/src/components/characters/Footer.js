import React, { Component } from 'react'

import { Row, Col, Button } from 'antd'
import { PlusOutlined, LogoutOutlined } from '@ant-design/icons'

export default class Footer extends Component {
  handleLogoutClick = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
    this.props.onNotAuthenticated()
  }

  handleAddCharacterClick = () => {
    window.open('http://localhost:5000/auth/eve', '_self')
  }

  render () {
    return (
      <>
        <Row justify='center' align='middle' style={{ marginTop: 20 }}>
          <Col>
            <Button type='text' icon={<PlusOutlined />} shape='circle' size='large' onClick={this.handleAddCharacterClick} />
          </Col>
          <Col>
            <Button danger type='text' icon={<LogoutOutlined />} shape='circle' size='large' onClick={this.handleLogoutClick} />
          </Col>
        </Row>
      </>
    )
  }
}

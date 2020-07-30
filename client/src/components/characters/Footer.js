import React, { Component } from 'react'

import { Row, Col, Button } from 'antd'
import { PlusOutlined, LogoutOutlined } from '@ant-design/icons'

export default class Footer extends Component {
  render () {
    return (
      <>
        <Row className='centered-text' style={{ marginTop: 20 }}>
          <Col span={2}>
            <Button type='text' icon={<PlusOutlined />} shape='circle' size='large' onClick={this.handleAddCharacterClick} />
          </Col>
          <Col span={2}>
            <Button danger type='text' icon={<LogoutOutlined />} shape='circle' size='large' onClick={this.handleLogoutClick} />
          </Col>
        </Row>
      </>
    )
  }

  handleLogoutClick = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
    this.props.onNotAuthenticated()
  };

  handleAddCharacterClick = () => {
    window.open('http://localhost:5000/auth/eve', '_self')
  };
}

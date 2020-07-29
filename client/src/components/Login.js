import React, { Component } from 'react'

import { Row, Col, Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

export default class Login extends Component {
  render () {
    return (
      <>
        <Row className='centered-text'>
          <Col>
            <Button onClick={this.handleLoginClick} type='primary' icon={<LoginOutlined />} size='large'>
                  Login
            </Button>
          </Col>
        </Row>
      </>
    )
  }

  handleLoginClick = () => {
    window.open('http://localhost:5000/auth/discord', '_self')
  };
}

import React, { Component } from 'react'

import { Row, Col, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default class Login extends Component {
  render () {
    return (
      <>
        <Row className='centered-text' style={{ marginTop: 20 }}>
          <Col>
            <Button type='text' icon={<PlusOutlined />} shape='circle' size='large' onClick={this.handleAddCharacterClick} />
          </Col>
        </Row>
      </>
    )
  }

  handleAddCharacterClick = () => {
    window.open('http://localhost:5000/auth/eve', '_self')
  };
}

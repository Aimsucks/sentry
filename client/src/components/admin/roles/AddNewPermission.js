import React, { Component } from 'react'

import { Row, Col, Select, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default class Permission extends Component {
  render () {
    const options = this.props.roles.filter(i => !this.props.permissions.map(p => p.id).includes(i.id))
    return (
      <Row justify='center' align='middle'>
        <Col span={6}>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder='Select a role'
            optionFilterProp='children'
            onChange={this.props.onSelectChange}
            filterOption={(input, option) =>
              option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            options={options.map(i => ({ value: i.id, key: i.id, label: i.name }))}
          />
        </Col>
        <Col span={2}>
          <Button style={{ marginLeft: 10 }} type='text' icon={<PlusOutlined />} shape='circle' size='large' onClick={this.props.onAdd} />
        </Col>
      </Row>
    )
  }
}

import React, { Component } from 'react'

import { Select } from 'antd'

export default class Permission extends Component {
  render () {
    const { type, value, onSelectChange, options } = this.props

    return (
      <Select
        mode='multiple'
        style={{ width: '300px' }}
        placeholder={`Select ${type === 'alliance' ? 'an' : 'a'} ${type}`}
        value={value}
        onChange={onSelectChange}
        options={options.map(i => ({ value: i.id, key: i.id, label: i.name }))}
      />
    )
  }
}

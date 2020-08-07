import React, { Component } from 'react'
import axios from 'axios'

import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default class DeletePermission extends Component {
  deleteRole = (id) => {
    axios.delete(`/api/permissions/${id}`)
      .then(res => {
        if (res.data) {
          this.props.updatePermissions()
        }
      })
      .catch(err => console.log(err))
  }

  handleDeleteClick = () => {
    this.deleteRole(this.props.id)
  }

  render () {
    return (
      <>
        <Button danger type='text' icon={<DeleteOutlined />} shape='circle' size='large' onClick={this.handleDeleteClick} />
      </>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'

import { Button } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

export default class SavePermission extends Component {
  savePermission = (id, characters, corporations, alliances) => {
    axios.put(`/api/permissions/${id}/characters/${characters.join(',')}`)
      .then(res => {
        if (res.data) {
          axios.put(`/api/permissions/${id}/corporations/${corporations.join(',')}`)
            .then(res => {
              if (res.data) {
                axios.put(`/api/permissions/${id}/alliances/${alliances.join(',')}`)
                  .then(res => {
                    if (res.data) {
                      this.props.updatePermissions()
                    }
                  })
                  .catch(err => console.log(err))
              }
            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  }

  handleStarClick = () => {
    this.savePermission(this.props.id, this.props.characters, this.props.corporations, this.props.alliances)
    this.props.onSave()
  }

  render () {
    console.log(this.props.characters)
    return (
      <>
        <Button disabled={this.props.disabled} type='text' icon={<SaveOutlined />} shape='circle' size='large' onClick={this.handleStarClick} />
      </>
    )
  }
}

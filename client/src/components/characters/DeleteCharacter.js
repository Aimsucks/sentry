import React, { Component } from 'react'
import axios from 'axios'

import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default class DeleteCharacter extends Component {
  deleteCharacter = (characterID) => {
    axios.delete(`/api/characters/${characterID}`)
      .then(res => {
        if (res.data) {
          this.props.updateCharacters()
        }
      })
      .catch(err => console.log(err))
  }

  handleDeleteClick = () => {
    this.deleteCharacter(this.props.characterID)
  }

  render () {
    return (
      <>
        <Button danger type='text' icon={<DeleteOutlined />} shape='circle' size='large' onClick={this.handleDeleteClick} />
      </>
    )
  }
}

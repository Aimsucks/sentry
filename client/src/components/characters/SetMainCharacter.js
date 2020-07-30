import React, { Component } from 'react'
import axios from 'axios'

import { Button } from 'antd'
import { StarOutlined, StarFilled } from '@ant-design/icons'

export default class SetMainCharacter extends Component {
  setMainCharacter = (characterID) => {
    axios.post(`/api/characters/${characterID}`)
      .then(res => {
        if (res.data) {
          this.props.updateCharacters()
        }
      })
      .catch(err => console.log(err))
  }

  handleStarClick = () => {
    this.setMainCharacter(this.props.characterID)
  }

  render () {
    return (
      <>
        <Button disabled={this.props.disabled} type='text' icon={this.props.disabled ? <StarFilled /> : <StarOutlined />} shape='circle' size='large' onClick={this.handleStarClick} />
      </>
    )
  }
}

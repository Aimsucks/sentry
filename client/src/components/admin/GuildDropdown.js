import React, { Component } from 'react'

import { Select, Avatar } from 'antd'

const { Option } = Select

export default class GuildDropdown extends Component {
  render () {
    return (
      <>
        <Select
          size='large'
          style={{ width: 200 }}
          defaultValue={this.props.guildList[0].id}
          onChange={this.props.onSelectChange}
        >
          {
            this.props.guildList.map((guild, index) => {
              return (
                <Option key={index} value={guild.id}><Avatar src={guild.icon} style={{ marginRight: 10 }} />{guild.name}</Option>
              )
            })
          }
        </Select>
      </>
    )
  }
}

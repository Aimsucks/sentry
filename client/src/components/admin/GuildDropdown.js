import React, { Component } from 'react'

import { Select } from 'antd'

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
                <Option key={index} value={guild.id}>
                  <img
                    src={guild.icon}
                    style={{
                      marginRight: 10,
                      borderRadius: '50%',
                      width: 30,
                      paddingBottom: 5
                    }}
                  />
                  {guild.name}
                </Option>
              )
            })
          }
        </Select>
      </>
    )
  }
}

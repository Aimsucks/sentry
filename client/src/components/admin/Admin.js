import React, { Component } from 'react'

import { Row, Col, Divider } from 'antd'

import GuildDropdown from './GuildDropdown'
import Roles from './roles/Roles'

export default class Admin extends Component {
  state = {
    selectedGuild: this.props.guilds[0].id
  }

  handleSelectedGuildChange = (id) => {
    this.setState({ selectedGuild: id })
  }

  render () {
    const { selectedGuild } = this.state
    return (
      <>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <GuildDropdown guildList={this.props.guilds} onSelectChange={this.handleSelectedGuildChange} />
          </Col>
        </Row>
        <Divider />
        <Roles guild={selectedGuild} />
      </>
    )
  }
}

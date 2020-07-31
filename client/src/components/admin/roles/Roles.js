import axios from 'axios'

import React, { Component } from 'react'

import { Row, Col } from 'antd'

import Permission from './Permission'
import AddNewPermission from './AddNewPermission'

export default class GuildDropdown extends Component {
  state = {
    roles: [],
    permissions: []
  }

  getGuildRoles = () => {
    axios.get(`/api/discord/roles/${this.props.guild}`)
      .then(res => {
        if (res.data) {
          this.setState({
            roles: res.data
          })
          this.getGuildPermissions(res.data)
        }
      })
      .catch(err => console.log(err))
  }

  getGuildPermissions = (roles) => {
    axios.get(`/api/permissions/${roles.map(guild => guild.id).join(',')}`)
      .then(permissionsResponse => {
        if (permissionsResponse.data) {
          this.setState({
            permissions: permissionsResponse.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount () {
    this.getGuildRoles()
  }

  componentDidUpdate (prevProps) {
    if (this.props.guild !== prevProps.guild) { this.getGuildRoles() }
  }

  render () {
    const { roles, permissions } = this.state
    return (
      <>
        {permissions.length > 0 ? (
          <Row>
            <Col span={24}>
              <Permission permissions={permissions} roles={roles} />
            </Col>
          </Row>
        ) : ''}
        {roles.length > 0 ? (
          <AddNewPermission roles={roles} />
        ) : ''}
      </>
    )
  }
}

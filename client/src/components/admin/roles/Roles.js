import axios from 'axios'

import React, { Component } from 'react'

import { Row, Col, List, Divider } from 'antd'

import Permission from './Permission'
import AddNewPermission from './AddNewPermission'

export default class GuildDropdown extends Component {
  state = {
    roles: [],
    permissions: [],
    options: {},
    addPermissionOption: ''
  }

  getGuildRoles = () => {
    axios.get(`/api/discord/roles/${this.props.guild}`)
      .then(res => {
        if (res.data) {
          this.setState({
            roles: res.data
          })
          this.getGuildPermissions()
        }
      })
      .catch(err => console.log(err))
  }

  getGuildPermissions = () => {
    axios.get(`/api/permissions/${this.state.roles.map(guild => guild.id).join(',')}`)
      .then(res => {
        if (res.data) {
          this.setState({
            permissions: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  getSelectOptions = () => {
    axios.get('/api/characters/all')
      .then(res => {
        if (res.data) {
          this.setState({
            options: res.data
          })
        }
      })
  }

  handlePermissionAddSelectChange = (value) => {
    this.setState({
      addPermissionOption: value
    })
  }

  handlePermissionAdd = () => {
    axios.post(`/api/permissions/${this.state.addPermissionOption}`)
      .then(res => {
        if (res.data) {
          this.getGuildPermissions()
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount () {
    this.getGuildRoles()
    this.getSelectOptions()
  }

  componentDidUpdate (prevProps) {
    if (this.props.guild !== prevProps.guild) {
      this.setState({
        roles: [],
        permissions: []
      })
      this.getGuildRoles()
    }
  }

  render () {
    const { roles, permissions, options } = this.state
    return (
      <>
        {roles.length > 0 && permissions.length > 0 && options.characters.length > 0 ? (
          <Row>
            <Col span={24}>

              <List
                dataSource={permissions}
                renderItem={item => (
                  <Permission
                    updatePermissions={this.getGuildPermissions}
                    options={options}
                    role={roles.find(role => role.id === item.id)}
                    permission={item}
                  />
                )}
              />
            </Col>
          </Row>
        ) : ''}
        <Divider />
        {roles.length > 0 ? (
          <AddNewPermission roles={roles} permissions={permissions} onSelectChange={this.handlePermissionAddSelectChange} onAdd={this.handlePermissionAdd} />
        ) : ''}
      </>
    )
  }
}

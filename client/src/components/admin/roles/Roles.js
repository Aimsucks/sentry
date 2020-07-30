import axios from 'axios'

import React, { Component } from 'react'

import { Row, Col } from 'antd'

import CharacterSelect from './CharacterSelect'
import CorporationSelect from './CorporationSelect'
import AllianceSelect from './AllianceSelect'

export default class GuildDropdown extends Component {
  state = {
    roles: [],
    permissions: []
  }

  componentDidMount () {
    this.getGuildRoles()
  }

  getGuildRoles = () => {
    axios.get(`/api/discord/roles/${this.props.guild}`)
      .then(rolesResponse => {
        if (rolesResponse.data) {
          this.setState({
            roles: rolesResponse.data
          })
          axios.get(`/api/permissions/${rolesResponse.data.map(guild => guild.id).join(',')}`)
            .then(permissionsResponse => {
              if (permissionsResponse.data) {
                this.setState({
                  permissions: permissionsResponse.data
                })
              }
            })
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    const { roles, permissions } = this.state
    return (
      <>
        {permissions && permissions.length > 0 && roles && roles.length
          ? (permissions.map((permission, index) => {
            console.log(roles)
            const role = roles.find(r => r.id === permissions.id)
            console.log(role)
            return (
              <Row key={index}>
                <Col>
                e
                  {/* {role.name} */}
                  {/* <CharacterSelect characters={permission.characters} />
              <CorporationSelect corporations={permission.corporations} />
              <AllianceSelect alliances={permission.alliances} /> */}
                </Col>
              </Row>
            )
          })) : ''}
      </>
    )
  }
}

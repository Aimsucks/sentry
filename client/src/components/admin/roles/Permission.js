import React, { Component } from 'react'

import { List, Row, Col } from 'antd'

import PermissionSelect from './PermissionSelect'
import DeletePermission from './DeletePermission'
import SavePermission from './SavePermission'

export default class PermissionItem extends Component {
  state = {
    characters: [...this.props.permission.characters.map(i => i.id)],
    corporations: [...this.props.permission.corporations.map(i => i.id)],
    alliances: [...this.props.permission.alliances.map(i => i.id)],
    modified: false
  }

  handleCharacterSelectChange = options => {
    this.setState({ characters: options, modified: true })
  }

  handleCorporationSelectChange = options => {
    this.setState({ corporations: options, modified: true })
  }

  handleAllianceSelectChange = options => {
    this.setState({ alliances: options, modified: true })
  }

  handleSave = () => {
    this.setState({ modified: false })
  }

  render () {
    const { role, options, permission } = this.props
    const { characters, corporations, alliances, modified } = this.state
    console.log(permission.characters.map(c => c.id))
    console.log(characters)

    return (
      <List.Item style={{ display: 'block' }}>
        <Row justify='center' gutter={8}>
          <Col span={4}>
            {role.name}
          </Col>
          <Col span={6}>
            <PermissionSelect
              type='character'
              value={characters}
              options={[...options.characters]}
              onSelectChange={this.handleCharacterSelectChange}
            />
          </Col>
          <Col span={6}>
            <PermissionSelect
              type='corporation'
              value={corporations}
              options={[...options.corporations]}
              onSelectChange={this.handleCorporationSelectChange}
            />
          </Col>
          <Col span={6}>
            <PermissionSelect
              type='alliance'
              value={alliances}
              options={[...options.alliances]}
              onSelectChange={this.handleAllianceSelectChange}
            />
          </Col>
          <Col span={2}>
            {modified ? (
              <SavePermission
                characters={characters}
                corporations={corporations}
                alliances={alliances}
                id={role.id}
                updatePermissions={this.props.updatePermissions}
                onSave={this.handleSave}
              />) : ''}
            <DeletePermission
              id={role.id}
              updatePermissions={this.props.updatePermissions}
            />
          </Col>
        </Row>
      </List.Item>
    )
  }
}

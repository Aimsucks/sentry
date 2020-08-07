import React, { Component } from 'react'

import { List } from 'antd'

import PermissionSelect from './PermissionSelect'

export default class PermissionItem extends Component {
  state = {
    characters: [...this.props.permission.characters.map(i => i.id)],
    corporations: [...this.props.permission.corporations.map(i => i.id)],
    alliances: [...this.props.permission.alliances.map(i => i.id)]
  }

  handleCharacterSelectChange = options => {
    this.setState({ characters: options })
  }

  handleCorporationSelectChange = options => {
    this.setState({ corporations: options })
  }

  handleAllianceSelectChange = options => {
    this.setState({ alliances: options })
  }

  render () {
    const { role, options } = this.props
    const { characters, corporations, alliances } = this.state

    return (
      <List.Item>
        <div>
          {role.name}
          <PermissionSelect
            type='character'
            value={characters}
            options={[...options.characters]}
            onSelectChange={this.handleCharacterSelectChange}
          />
          <PermissionSelect
            type='corporation'
            value={corporations}
            options={[...options.corporations]}
            onSelectChange={this.handleCorporationSelectChange}
          />
          <PermissionSelect
            type='alliance'
            value={alliances}
            options={[...options.alliances]}
            onSelectChange={this.handleAllianceSelectChange}
          />
        </div>
      </List.Item>
    )
  }
}

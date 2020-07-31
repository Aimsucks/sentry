import React, { Component } from 'react'

import { Row, Col, List, Typography, Skeleton } from 'antd'

import CharacterSelect from './CharacterSelect'
import CorporationSelect from './CorporationSelect'
import AllianceSelect from './AllianceSelect'

export default class Permission extends Component {
  // grab characters/corporations/alliances here and pass to components as props
  render () {
    const { permissions, roles } = this.props
    const span = 6
    return (
      <List
        dataSource={permissions}
        renderItem={item => (
          <List.Item>
            {/* <List.Item.Meta
              title={roles.find(role => role.id === item.id).name}
            /> */}
            <div>
              {roles.find(role => role.id === item.id).name}
            </div>
          </List.Item>
        )}
      />
    )
  }
}

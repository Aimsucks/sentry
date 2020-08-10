import React from 'react'

import DeleteCharacter from './DeleteCharacter'
import SetMainCharacter from './SetMainCharacter'

import { Row, Col, Typography, Avatar, Tooltip } from 'antd'

const { Text } = Typography

const ListCharacters = ({ characters, updateCharacters }) => {
  return (
    <>
      {
        characters &&
          characters.length > 0
          ? (
            characters.sort((x, y) => {
              return y.main - x.main
            }).map((character, index) => {
              return (
                <div key={index}>
                  <Row type='flex' style={{ alignItems: 'center', textAlign: 'center', paddingTop: 10, paddingBottom: 10, height: 80 }}>
                    <Col span={4} style={{ height: '100%' }}>
                      <Avatar size={60} src={`https://images.evetech.net/characters/${character.id}/portrait`} />
                    </Col>
                    <Col span={16} style={{ height: '100%' }}>
                      <Row style={{ height: '50%' }}>
                        <Col>
                          <Text className='no-title-margin character-name'>{character.name}</Text>
                        </Col>
                      </Row>
                      <Row style={{ height: '50%' }}>
                        <Col>
                          <Tooltip placement='bottom' title={character.corporation.name}>
                            <Avatar size={30} style={{ background: 'black' }} src={`https://images.evetech.net/corporations/${character.corporation.id}/logo`} />
                          </Tooltip>
                          {character.corporation.alliance ? (
                            <Tooltip placement='bottom' title={character.corporation.alliance.name}>
                              <Avatar size={30} style={{ marginLeft: 10, background: 'black' }} src={`https://images.evetech.net/alliances/${character.corporation.alliance.id}/logo`} />
                            </Tooltip>
                          ) : ''}
                        </Col>
                      </Row>
                    </Col>
                    <Col span={2}>
                      <SetMainCharacter disabled={character.main} characterID={character.id} updateCharacters={updateCharacters} />
                    </Col>
                    <Col span={2}>
                      <DeleteCharacter characterID={character.id} updateCharacters={updateCharacters} />
                    </Col>
                  </Row>
                  {character.main ? (
                    <hr
                      style={{
                        color: 'rgb(255, 255, 255, 0.6)',
                        height: 2,
                        width: '25%'
                      }}
                    />
                  ) : ''}
                </div>
              )
            })
          )
          : ''
      }
    </>
  )
}

export default ListCharacters

import React from 'react'

import DeleteCharacter from './DeleteCharacter'
import SetMainCharacter from './SetMainCharacter'

import { Row, Col, Typography, Avatar, Tooltip } from 'antd'

const { Title } = Typography

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
                <Row key={index} type='flex' style={{ alignItems: 'center', textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>
                  <Col span={4}>
                    <Avatar size={60} src={`https://images.evetech.net/characters/${character.id}/portrait`} />
                  </Col>
                  <Col span={16}>
                    <Row style={{ alignItems: 'center' }}>
                      <Col>
                        <Title level={2} className='no-title-margin'>{character.name}</Title>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Tooltip placement='bottom' title={character.corporation.name}>
                          <Avatar size={30} src={`https://images.evetech.net/corporations/${character.corporation.id}/logo`} />
                        </Tooltip>
                        {character.corporation.alliance ? (
                          <Tooltip placement='bottom' title={character.corporation.alliance.name}>
                            <Avatar size={30} src={`https://images.evetech.net/alliances/${character.corporation.alliance.id}/logo`} />
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
              )
            })
          )
          : (
            <Title>No characters added</Title>
          )
      }
    </>
  )
}

export default ListCharacters

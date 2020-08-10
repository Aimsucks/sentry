import React, { Component } from 'react'
import axios from 'axios'

import { Row, Col, Typography } from 'antd'

import ListCharacters from './ListCharacters'

const { Title } = Typography

export default class Characters extends Component {
  state = {
    characters: []
  }

  componentDidMount () {
    this.getCharacters()
  }

  getCharacters = () => {
    axios.get('/api/characters')
      .then(res => {
        if (res.data) {
          this.setState({
            characters: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    const { characters } = this.state

    return (
      <>
        <Row style={{ paddingTop: 50 }}>
          <Col span={24}>
            <Row className='centered-text'>
              <Col>
                <Title className='no-title-margin'>Characters</Title>
              </Col>
            </Row>
            <ListCharacters characters={characters} updateCharacters={this.getCharacters} />
          </Col>
        </Row>
      </>
    )
  }
}

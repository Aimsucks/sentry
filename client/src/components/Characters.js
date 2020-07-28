import React, { Component } from 'react'
import axios from 'axios'

import ListCharacters from './ListCharacters'

class Characters extends Component {
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
      <div>
        <h1>My Characters</h1>
        <table>
          <thead><th colspan='4'>Characters</th></thead>
          <ListCharacters characters={characters} />
        </table>
      </div>
    )
  }
}

export default Characters

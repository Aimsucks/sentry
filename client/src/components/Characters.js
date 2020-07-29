import React, { Component } from 'react'
import axios from 'axios'

import ListCharacters from './ListCharacters'
import AddCharacter from './AddCharacter'

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
        <table>
          <thead><th class='tableHeader'>Characters</th></thead>
          <ListCharacters characters={characters} />
          <thead><th class='addButton'><AddCharacter /></th></thead>
        </table>
      </div>
    )
  }
}

export default Characters

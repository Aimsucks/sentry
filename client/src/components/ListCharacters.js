import React from 'react'

const ListCharacters = ({ characters, setMainCharacter, deleteCharacter }) => {
  return (
    <ul>
      {
        characters &&
          characters.length > 0
          ? (
            characters.map(character => {
              return (
                <li key={character.id}>{character.name}, {character.corporation.name}{character.corporation.alliance ? `, ${character.corporation.alliance.name}` : ''}</li>
              )
            })
          )
          : (
            <li>No characters added</li>
          )
      }
    </ul>
  )
}

export default ListCharacters

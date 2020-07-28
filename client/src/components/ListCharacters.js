import React from 'react'

const ListCharacters = ({ characters, setMainCharacter, deleteCharacter }) => {
  return (
    <>
      {
        characters &&
          characters.length > 0
          ? (
            characters.map(character => {
              return (
                <tbody key={character.id}>
                  <tr>
                    <td rowspan='3' class='characterPortraitRow'><img class='characterPortrait' src={`https://images.evetech.net/characters/${character.id}/portrait`} alt='' /></td>
                    <td class='characterName'>{character.name}</td>
                    <td rowspan='3' class='characterButton'>favorite</td>
                    <td rowspan='3' class='characterButton'>delete</td>
                  </tr>
                  <tr>
                    <td class='characterCorporation'>{character.corporation.name}</td>
                  </tr>
                  {character.corporation.alliance ? (
                    <tr>
                      <td class='characterAlliance'>{character.corporation.alliance.name}</td>
                    </tr>
                  ) : ''}
                </tbody>
              )
            })
          )
          : (
            <li>No characters added</li>
          )
      }
    </>
  )
}

export default ListCharacters

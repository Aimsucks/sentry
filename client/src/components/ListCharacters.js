import React from 'react'

import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <td rowspan='3' class='characterPortraitColumn'><img class='characterPortrait' src={`https://images.evetech.net/characters/${character.id}/portrait`} alt='' /></td>
                    <td class='characterInfo'>
                      <p class='characterName'>{character.name}</p>
                      <p class='characterCorporation'><img class='groupImage' alt='' src={`https://images.evetech.net/corporations/${character.corporation.id}/logo`} />{character.corporation.name}</p>
                      {character.corporation.alliance ? (<p class='characterAlliance'><img class='groupImage' alt='' src={`https://images.evetech.net/alliances/${character.corporation.alliance.id}/logo`} />{character.corporation.alliance.name}</p>) : ''}
                    </td>
                    <td rowspan='3' class='characterButton'><FontAwesomeIcon icon={faStar} size='lg' /></td>
                    <td rowspan='3' class='characterButton'><FontAwesomeIcon icon={faTrash} size='lg' /></td>
                  </tr>
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

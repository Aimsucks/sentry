const axios = require('axios')
const { models } = require('../models')

// **********

const getCharacterInfo = async characterID => {
  console.log(`Getting ESI information for character ID ${characterID}`)
  const request = await axios.get(`https://esi.evetech.net/latest/characters/${characterID}`)
  return request.data
}

const createDatabaseCharacter = async (userID, characterID, info) => {
  try {
    console.log(`Attempting to create database entry for character ID ${characterID}`)
    const character = await models.character.findOne({ where: { id: characterID } })

    if (character && (new Date() - character.updatedAt) < 1000 * 60 * 60 * 24) {
      console.log(`Character ID ${characterID} already exists`)
      return
    }

    console.log(`Character ID ${characterID} does not exist or needs to be updated`)
    await models.character.upsert({ id: characterID, name: info.name, userId: userID, corporationId: info.corporation_id })
    console.log(`Character ID ${characterID} has been added to the database or updated`)
    return
  } catch (err) {
    console.error(err)
  }
}

// **********

const getCorporationInfo = async corporationID => {
  console.log(`Getting ESI information for corporation ID ${corporationID}`)
  const request = await axios.get(`https://esi.evetech.net/latest/corporations/${corporationID}`)
  return request.data
}

const createDatabaseCorporation = async corporationID => {
  try {
    console.log(`Attempting to create database entry for corporation ID ${corporationID}`)
    const corporation = await models.corporation.findOne({ where: { id: corporationID } })

    if (corporation && (new Date() - corporation.updatedAt) < 1000 * 60 * 60 * 24) {
      console.log(`Corporation ID ${corporationID} already exists`)
      return
    }

    console.log(`Corporation ID ${corporationID} does not exist or needs to be updated`)
    const info = await getCorporationInfo(corporationID)
    await models.corporation.upsert({ id: corporationID, name: info.name, allianceId: info.alliance_id })
    console.log(`Corporation ID ${corporationID} has been added to the database or updated`)
    return
  } catch (err) {
    console.error(err)
  }
}

// **********

const getAllianceInfo = async allianceID => {
  console.log(`Getting ESI information for alliance ID ${allianceID}`)
  const request = await axios.get(`https://esi.evetech.net/latest/alliances/${allianceID}`)
  return request.data
}

const createDatabaseAlliance = async allianceID => {
  try {
    console.log(`Attempting to create database entry for alliance ID ${allianceID}`)
    const alliance = await models.alliance.findOne({ where: { id: allianceID } })

    if (alliance) {
      console.log(`Alliance ID ${allianceID} already exists`)
      return
    }

    console.log(`Alliance ID ${allianceID} does not exist`)
    const info = await getAllianceInfo(allianceID)
    await models.alliance.create({ id: allianceID, name: info.name })
    console.log(`Alliance ID ${allianceID} has been added to the database`)
    return
  } catch (err) {
    console.error(err)
  }
}

// **********

module.exports.addNewCharacter = async (userID, characterID) => {
  console.group(`Beginning character creation process for character ID ${characterID}`)
  const info = await getCharacterInfo(characterID)
  if (info.alliance_id) await createDatabaseAlliance(info.alliance_id)
  await createDatabaseCorporation(info.corporation_id)
  await createDatabaseCharacter(userID, characterID, info)
  console.groupEnd()
  console.log(`Finished character creation process for character ID ${characterID}`)
}

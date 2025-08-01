import { PlayerModel } from "../models/playerModels"
import statisticsModel from "../models/statisticsModel"
import players from '../data/players.json'

const database:PlayerModel[] = players

export const findPlayers= async():Promise<PlayerModel[]>=>{
    return database
}

export const findPlayerById = async(id:number):Promise<PlayerModel | undefined>=>{
    return database.find((player)=> player.id === id)
}

export const createPlayer = async(player:PlayerModel):Promise<PlayerModel> =>{
  database.push(player)
  return player
}

export const deletePlayer = async(id:number)=>{
    const index = database.findIndex((player)=> {player.id !== id } )
    if (index != -1){
      database.splice(index, 1)
      return true
    }
    return false
}
export const findAndModifiedPlayer = async(id:number, statistics:statisticsModel):Promise<PlayerModel>=>{
  const playerIndex = database.findIndex((player)=> player.id === id)
  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics
  }
  return database[playerIndex]
}
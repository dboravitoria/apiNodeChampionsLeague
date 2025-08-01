import { PlayerModel } from "../models/playerModels"
import statisticsModel from "../models/statisticsModel"
import { createPlayer, findPlayerById, findPlayers, deletePlayer, findAndModifiedPlayer } from "../repositories/player"
import { badRequest, created, noContent, notFound, ok } from "../utils/httpResponse"

export const getPlayerService = async (id?: number)=>{
    const data = await findPlayers()
    let response = null
    if(data){
        response = await ok(data)
    }else{
        response = await noContent()
    }
    
    return response
}

export const getPlayerByIdService = async (id:number)=>{
    const data = await findPlayerById(id)    
    let response = null
    if(data){
        return response = await ok(data)
    }else{
       return response = await notFound({ message:"Player not found!" })
    }

}


export const createPlayerService = async(player: PlayerModel)=>{
     await createPlayer(player)
    if(player){
        return await created()
    }else{
        return badRequest()
    }
}

export const deletePlayerPerId = async(id:number)=>{
    const isDeleted = await deletePlayer(id)
    
    if(isDeleted){
        return  await ok({message: "deleted"})
    }else{
        return await badRequest({message: "player not found!"})
    }
}

export const updatePlayerService = async(id:number, bodyValue:statisticsModel)=>{
    const data = await findAndModifiedPlayer(id, bodyValue)
    const response = await ok(data)
    return response
}
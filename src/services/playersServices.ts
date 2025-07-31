import { findPlayers } from "../repositories/player"
import { noContent, ok } from "../utils/httpResponse"

export const getPlayerService = async ()=>{
    const data = await findPlayers()
    let response = null
    if(data){
        response = await ok(data)
    }else{
        response = await noContent()
    }
    
    return response
}
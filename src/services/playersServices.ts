import { noContent, ok } from "../utils/httpResponse"

export const getPlayerService = async ()=>{
    const data = {player:""}
    let response = null
    if(data){
        response = await ok(data)
    }else{
        response = await noContent()
    }
    
    return response
}
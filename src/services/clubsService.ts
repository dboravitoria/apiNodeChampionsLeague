import { findClubs } from "../repositories/clubsRepositorie"
import { noContent, ok } from "../utils/httpResponse"

 
export const getClubsService = async()=>{
     const data = await findClubs()
        let response = null
        if(data){
            response = await ok(data)
        }else{
            response = await noContent()
        }
        
        return response
}
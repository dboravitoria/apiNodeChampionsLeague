import { Request, Response } from "express"
import { getClubsService } from "../services/clubsService"

export const getClubs = async(req: Request, res:Response)=>{
    const httpResponse = await getClubsService()   
    
    res.status(httpResponse.statusCode).json(httpResponse.body)
 }
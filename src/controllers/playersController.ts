import { Request, Response } from "express"
import { createPlayerService, getPlayerByIdService, getPlayerService, deletePlayerPerId, updatePlayerService } from "../services/playersServices"
import { badRequest } from "../utils/httpResponse"
import statisticsModel from "../models/statisticsModel"


export const getPlayer = async (req:Request, res: Response)=>{
    const httpResponse = await getPlayerService()   
    
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req:Request, res:Response)=>{
    const id = parseInt(req.params.id)
    const httpResponse = await getPlayerByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req:Request, res:Response)=>{
    const bodyValue = req.body
    const httpResponse = await createPlayerService(bodyValue)
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
        let response = await badRequest()
        res.status(response.statusCode).json(response.body)
    }
    
}

export const deletePlayer = async(req:Request, res:Response)=>{
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerPerId(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async(req:Request, res:Response)=>{
    const id = parseInt(req.params.id)
    const bodyValue:statisticsModel = req.body
    const httpResponse = await updatePlayerService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}



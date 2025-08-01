import { HttpResponse } from "../models/httpResponseModel"

export const ok = async (data:any):Promise<HttpResponse> =>{
    return{
        statusCode:200,
        body:data
    }
}


export const created = async ():Promise<HttpResponse> =>{
    return{
        statusCode: 201,
        body:{
            message: "successfull"
        }
    }
}


export const noContent = async ():Promise<HttpResponse> =>{
    return{
        statusCode: 204,
        body:null
    }
}

export const badRequest = async (p0?: { message: string }):Promise<HttpResponse> =>{
    return{
        statusCode: 400,
        body: {
            message: p0?.message
        }
    }
}

export const notFound = async (p0?: { message: string }): Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: {
            message: p0?.message
        }
    }
}


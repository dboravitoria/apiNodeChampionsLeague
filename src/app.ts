import express from "express"
import { json } from "express"
import router from "./routes/routes"
import cors from 'cors'


export function createApp(){
    const app = express()

    app.use(json())
    app.use("/api", router)
    const corsOption ={
        origin: "localhost:3636",
        methods: ["GET", "POST", "PATCH", "DELETE"]
    }
    app.use(cors(corsOption))
    return app
}

 


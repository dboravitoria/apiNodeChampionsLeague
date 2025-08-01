import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer,updatePlayer } from "../controllers/playersController";
import { getClubs } from "../controllers/clubsController";

const router = Router()

router.get("/players", getPlayer)
router.post("/players", postPlayer)
router.get("/players/:id", getPlayerById)
router.delete("/players/:id", deletePlayer)
router.patch("/players/:id", updatePlayer)

router.get("/clubs", getClubs)



export default router
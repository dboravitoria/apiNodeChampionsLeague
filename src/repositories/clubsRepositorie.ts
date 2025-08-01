import { clubModel } from "../models/clubModel"
import clubs from '../data/clubs.json'

const database:clubModel[] = clubs

export const findClubs= async():Promise<clubModel[]>=>{
    return database
}

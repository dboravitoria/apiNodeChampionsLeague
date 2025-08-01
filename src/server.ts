import chalk from 'chalk'
import { createApp } from './app'

const app = createApp()
const port = process.env.PORT




app.listen(port, ()=>{
    console.log(chalk.italic.bold.green(`✅ Server init! Running in http://localhost:${port}`))
})
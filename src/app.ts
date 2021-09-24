import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
import morgan from 'morgan'
import 'dotenv/config'

class App {  
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.databaseSetup()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(morgan('dev'))

  }

  private async databaseSetup (): Promise<void> {
    try{
     await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log('Database conectado com sucesso')
  }catch(err){
    err => console.log(err)
  }
  }
  private routes (): void {
    this.express.use(routes)
    
  }
}

export default new App().express
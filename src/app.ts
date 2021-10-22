import "reflect-metadata"
import express, {Request, Response, NextFunction, Router} from 'express'
import "express-async-errors"//precisa ser depois do express
import { createConnection } from "typeorm"
import {router} from "./routes"

createConnection()
const app = express()
app.use(express.json());
app.use(router)

export {app}
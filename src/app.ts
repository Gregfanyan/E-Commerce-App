import express from 'express'
import compression from 'compression'
import session from 'express-session'
import bodyParser from 'body-parser'
import lusca from 'lusca'
import mongo from 'connect-mongo'
import flash from 'express-flash'
import path from 'path'
import mongoose from 'mongoose'
import passport from 'passport'
import bluebird from 'bluebird'
import cors from 'cors'

import { MONGODB_URI, SESSION_SECRET } from './util/secrets'

import movieRouter from './routers/movie'
import productRouter from './routers/Products'
import userRouter from './routers/Users'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

const app = express()
const mongoUrl = MONGODB_URI

;(<any>mongoose).Promise = bluebird
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('database connected')
  })
  .catch((err: Error) => {
    console.log(
      'MongoDB connection error. Please make sure MongoDB is running. ' + err
    )
    process.exit(1)
  })

app.set('port', process.env.PORT || 5000)

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(cors())

app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/user', userRouter)

app.use(apiErrorHandler)

app.use(express.static('client/build'))

app.get('*', function (req, res) {
  const fullPath = path.join(__dirname,  '../client', 'build', 'index.html')
  res.sendFile(fullPath)
})

export default app

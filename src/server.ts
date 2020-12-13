import express from 'express'
import errorHandler from 'errorhandler'

import app from './app'

app.use(errorHandler())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

const server = app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  )
})

export default server

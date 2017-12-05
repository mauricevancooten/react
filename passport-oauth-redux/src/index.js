import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'
import Router from './components/router'
import Template from './components/template'
import {MongoClient} from 'mongodb'
import cookieSession from 'cookie-session'
import passport from 'passport'
import keys from '../config/keys'
import './services/passport'
import authRoutes from './routes/authRoutes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'

const app = express()

let db

MongoClient.connect('mongodb://localhost/oauth').then(connection => {
  db = connection
}).catch(error => {
  console.log('Error:', error)
})

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

app.use('/static', express.static('public'))

app.get('*', (req, res) => {
  const store = createStore(reducer,{})
  const context = {}
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Router/>
      </StaticRouter>
    </Provider>
  )

  if (context.status) {
    res.status(404).send(Template({html: html}))
  } else {
    res.status(200).send(Template({html: html}))
  }

})

app.listen(3000, () => {
  console.log('listening on port 3000')
})

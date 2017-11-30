import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter, matchPath} from 'react-router'
import Router from './components/router'
import Template from './components/template'
import {MongoClient} from 'mongodb'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
// import {ObjectId} from 'mongodb'
import crudRoutes from './routes/crud-routes'

const app = express()

app.use(bodyParser.json())

let db

MongoClient.connect('mongodb://localhost/crud').then(connection => {
  db = connection
}).catch(error => {
  console.log('Error:', error)
})

app.use('/static', express.static('public'))

crudRoutes(app)

app.get('*', (req, res) => {
  fetch('http://localhost:3000/api').then(res => res.json()).then(data => {
    const context = {}
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <Router data={data.posts}/>
      </StaticRouter>
    )
    if (context.status) {
      res.status(404).send(Template({html: html}))
    } else {
      res.status(200).send(Template({html: html, data: data.posts}))
    }
  }).catch(error => {
    console.log('Error:', error)
    res.status(500)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

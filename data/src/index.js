import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter, matchPath} from 'react-router'
import Router from './components/router'
import data from './data.json'
import Template from './components/template'

const app = express()

app.use('/static', express.static('public'))

const routes = ['/', '/about']
data.artists.map((artist) => {
  routes.push(`/${artist.handle}`)
})

app.get('*', (req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Router art={data}/>
    </StaticRouter>
  )

  const match = routes.reduce((acc, route) => matchPath(req.url, route, {exact: true}) || acc, null)

  if (!match.isExact) {
    res.status(404).send(Template({
      html: html,
      data: JSON.stringify(data.artists)
    }))
    return
  }

  res.status(200).send(Template({
    html: html,
    data: JSON.stringify(data.artists)
  }))
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})

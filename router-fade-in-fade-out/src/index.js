import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'
import Router from './components/router'
import Template from './components/template'

const app = express()

app.use('/static', express.static('public'))

app.get('*', (req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Router/>
    </StaticRouter>
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

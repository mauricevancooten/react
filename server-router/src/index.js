import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'
import Router from './components/router'

const app = express()

app.set('views', './views')
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('*', (req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Router/>
    </StaticRouter>
  )
  res.render('index', { title: 'Site Name', content:`${html}`})
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})

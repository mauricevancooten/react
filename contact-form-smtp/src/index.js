import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'
import Router from './components/router'
import Template from './components/template'
import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'
import bodyParser from 'body-parser'
import keys from '../config/keys'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/static', express.static('public'))

app.get('*', (req, res, next) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Router/>
    </StaticRouter>
  )
  res.status(200).send(Template({html: html}))
})

app.post('/contact', (req, res) => {
  const transporter = nodemailer.createTransport(smtpTransport({
    host: keys.mtHost,
    port: keys.mtPort,
    tls: {
        rejectUnauthorized:false
    },
    auth: {
      user: keys.mtUser,
      pass: keys.mtPass
    }
  }))

  const mailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    to:'info@mauricevancooten.art',
    subject: 'Art Enquiry',
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // console.log(error)
       res.sendStatus(500)
    } else {
      // console.log('Email sent ' + info.response)
      res.sendStatus(200)
    }
    transporter.close()
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})

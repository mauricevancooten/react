import React from 'react'

const Template = ({html}) => {
  return (
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Site Name</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/static/css/styles.css" />
    </head>
    <body>
      <div id="content">${html}</div>
      <script src="/static/js/bundle.js"></script>
    </body>
  </html>`)
}

export default Template

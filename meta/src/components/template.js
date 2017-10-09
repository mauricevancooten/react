import React from 'react'

const Template = ({html, helmet}) => {
  return (
  `<!DOCTYPE html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
	    ${helmet.meta.toString()}
	    ${helmet.link.toString()}
      <link rel='stylesheet' href='/static/css/styles.css' />
    </head>

    <body ${helmet.bodyAttributes.toString()}>
      <div id='content'>${html}</div>
      <script src='/static/js/bundle.js'></script>
    </body>
  </html>`)
}

export default Template

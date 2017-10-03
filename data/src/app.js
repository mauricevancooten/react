import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Router from './components/router'

ReactDOM.render(
  <BrowserRouter>
    <Router data={window.__data__}  />
  </BrowserRouter>,
document.getElementById('content')
)

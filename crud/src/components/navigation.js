import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => (
  <div>
    <header>
      <h1>Site Name</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
)

export default Navigation

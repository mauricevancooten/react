import React from 'react'
import {Route, Link} from 'react-router-dom'
import Contact from './contact'

const Router = () => (
  <div>
    <header>
      <h1>Site Name</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className='wrapper'>
      <div className='container'>
        <Route exact path='/' render={() => <h1>Home</h1>}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </div>
    <footer>
      <small>
        <a href='https://opensource.org/licenses/MIT'>MIT</a>
      </small>
    </footer>
  </div>
)

export default Router

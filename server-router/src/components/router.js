import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import About from './about'
import NotFound from './not-found'

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
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className='wrapper'>
      <div className='container'>
        <Switch>
          <Route exact path='/' render={() => <h1>Home</h1>}/>
          <Route path='/about' component={About}/>
          <Route component={NotFound} />
        </Switch>
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

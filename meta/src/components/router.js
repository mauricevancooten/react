import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import About from './about'
import Home from './home'
import Helmet from 'react-helmet'
import NotFound from './not-found'

const Router = () => (
  <div>
    <Helmet
					htmlAttributes={{lang: 'en', amp: undefined}} // amp takes no value
					titleTemplate='%s | Site Name'
					titleAttributes={{itemprop: 'name', lang: 'en'}}
					meta={[
						{name: 'description', content: ''},
						{name: 'viewport', content: 'width=device-width, initial-scale=1'},
					]}
				/>
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
        <Route exact path='/' component={Home}/>
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

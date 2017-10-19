import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import About from './about'
import Artist from './artist'
import Collection from './collection'
import NotFound from './not-found'

const Router = ({data}) => (
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
          <Route exact path='/' render={() => (<Collection art={data}/>)}/>
          <Route exact path='/about' component={About}/> {data.map((artist, i) => {
            return <Route exact path={`/${artist.handle}`} key={i} render={() => (<Artist art={data} id={artist.handle}/>)}/>
          })}
          <Route component={NotFound}/>
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

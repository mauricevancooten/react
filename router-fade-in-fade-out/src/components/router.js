import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import About from './about'
import Home from './home'
import NotFound from './not-found'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

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
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="example" timeout={{
              enter: 500,
              exit: 300
            }}>
              <section className='sticky'>
                <Switch location={location}>
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route component={NotFound}/>
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        )}/>
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

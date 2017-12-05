import React, {Component} from 'react'
import {Route, Link, Switch, Redirect, withRouter} from 'react-router-dom'
import About from './about'
import Dashboard from './dashboard'
import NotFound from './not-found'
import {connect} from 'react-redux'
import {fetchUser, logoutUser} from '../actions/actions'
import PrivateRoute from './private-route'

class MainRouter extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(fetchUser())
  }
  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(logoutUser())
  }
  render() {
    const {auth} = this.props
    return (<div>
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
            <li>
              {auth ? <a onClick={this.handleClick}>Logout</a> : <a href="/auth/google">Login</a> }
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='wrapper'>
        <div className='container'>
          <Switch>
            <Route exact="exact" path='/' render={() => <h1>Home</h1>}/>
            <Route path='/about' component={About}/>
            <Route path='/auth/google/callback' render={() => <h1>Home</h1>}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
      <footer>
        <small>
          <a href='https://opensource.org/licenses/MIT'>MIT</a>
        </small>
      </footer>
    </div>)
  }
}

const Router = withRouter(connect(store => {
  return {auth: store}
})(MainRouter))

export default Router

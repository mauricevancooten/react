import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import About from './about'
import Artist from './artist'
import Collection from './collection'
import NotFound from './not-found'

class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      art: []
    }
  }
  componentWillMount() {
    const {art} = this.state
    const {data} = this.props
    for (let prop in data) {
      art.push(data[prop])
    }
  }
  render() {
    const {art} = this.state
    return (
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
              <Route exact path='/' render={() => (<Collection art={art}/>)}/>
              <Route exact path='/about' component={About}/>
              {art.map((artist, i) => { return <Route exact path={`/${artist.handle}`} key={i} render={() => (<Artist art={art} id={artist.handle}/>)}/> })}
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
  }
}

export default Router

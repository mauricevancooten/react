import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import About from './about'
import Artist from './artist'
import Collection from './collection'

class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      art: []
    }
  }
  componentWillMount() {
    for (let prop in this.props.data) {
      this.state.art.push(this.props.data[prop])
    }
  }
  render() {
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
            <Route exact path='/' render={() => (<Collection art={this.state.art}/>)}/>
            <Route path='/about' component={About}/>
            <Route exact path='/collection/:id' render={({match}) => (<Artist art={this.state.art} id={match.params.id}/>)}/>
          </div>
          {/* .container */}
        </div>
        {/* .wrapper */}
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

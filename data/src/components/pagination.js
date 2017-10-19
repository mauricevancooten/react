import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prev: '',
      next: '',
      first: '',
      last: ''
    }
  }
  componentDidMount() {
    const {art, id} = this.props
    for (let i = 0; i < art.length; i++) {
      if (id === art[i].handle) {
        if (i < (art.length - 1)) {
          let next = art[i + 1].handle
          this.setState({next: next, last: false})
        } else {
          this.setState({last: true})
        }
        if (i > 0) {
          let prev = art[i - 1].handle
          this.setState({prev: prev, first: false})
        } else {
          this.setState({first: true})
        }
      }
    }
  }
  render() {
    const {first, last, prev, next} = this.state
    return (
      <div className='pagination'>
        <span>
          <Link className={first ? 'hide-text' : ''} to={prev}>Prev</Link>
        </span>
        <span>
          <Link className={last ? 'hide-text' : ''} to={next}>Next</Link>
        </span>
      </div>
    )
  }
}

export default Pagination

import React, {Component} from 'react'

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
    for (let i = 0; i < this.props.art.length; i++) {
      if (this.props.id === this.props.art[i].handle) {
        if (i < (this.props.art.length - 1)) {
          let next = this.props.art[i + 1].handle
          this.setState({next: next, last: false})
        } else {
          this.setState({last: true})
        }
        if (i > 0) {
          let prev = this.props.art[i - 1].handle
          this.setState({prev: prev, first: false})
        } else {
          this.setState({first: true})
        }
      }
    }
  }
  render() {
    return (
      <div className='pagination'>
        <span>
          <a className={this.state.first ? 'hide-text' : ''} href={this.state.prev}>Prev</a>
        </span>
        <span>
          <a className={this.state.last ? 'hide-text' : ''} href={this.state.next}>Next</a>
        </span>
      </div>
    )
  }
}

export default Pagination

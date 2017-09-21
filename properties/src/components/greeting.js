import React, {Component} from 'react'

class Greeting extends Component {
  // console.log(this)
  render() {
    return (
      <div>
        <p>Hello my name is {this.props.name}, I'm an {this.props.occupation}.</p>
      </div>
    )
  }
}

export default Greeting

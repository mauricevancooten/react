import React, {Component} from 'react'

class Introduction extends Component {
  constructor(props) {
    super(props)
    this.state = {name:''}
    this.nameChanged = this.nameChanged.bind(this)
    this.resetName = this.resetName.bind(this)
  }
  nameChanged(event) {
    this.setState({name: event.target.value})
  }
  resetName(event) {
    this.setState({name: ''})
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <input type='text' onChange={this.nameChanged}/>
        <h2>Hello my name is {this.state.name} </h2>
        <button onClick={this.resetName}>Reset</button>
      </div>
    )
  }
}

export default Introduction

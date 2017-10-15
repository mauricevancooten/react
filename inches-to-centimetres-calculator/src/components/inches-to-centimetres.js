import React, {Component} from 'react'

class InchesToCentimetres extends Component {
  constructor(props) {
    super(props)
    this.state = {inches:''}
    this.inchesChanged = this.inchesChanged.bind(this)
    this.resetInches = this.resetInches.bind(this)
  }
  inchesChanged(event) {
    let centimetres = event.target.value  / .39370079
    centimetres = Math.round(centimetres * 10) / 10
    this.setState({inches: centimetres })
  }
  resetInches(event) {
    this.setState({inches: ''})
  }
  render() {
    const {inches} = this.state
    // console.log(inches)
    return (
      <div>
        <p>Inches: <input type='text' onChange={this.inchesChanged}/></p>
        <h2>Centimetres: {inches} </h2>
        <button onClick={this.resetInches}>Reset</button>
      </div>
    )
  }
}

export default InchesToCentimetres

import React, {Component} from 'react'
import axios from 'axios'

class Contact extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.nameChanged = this.nameChanged.bind(this)
    this.emailChanged = this.emailChanged.bind(this)
    this.messageChanged = this.messageChanged.bind(this)
    this.state = {
      email: '',
      name: '',
      message: '',
      sent: false
    }
  }
  nameChanged(e) {
    this.setState({name: e.target.value})
  }
  messageChanged(e) {
    this.setState({message: e.target.value})
  }
  emailChanged(e) {
    this.setState({email: e.target.value})
  }
  async handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await axios('/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({email: this.state.email, name: this.state.name, message: this.state.message})
      })
      res.status === 200
        ? this.setState({sent: true})
        : this.setState({sent: false})
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (<div>
      <h1>Contact</h1>
      <p className={this.state.sent
          ? ''
          : 'hide-text'}>Thank you for your message.</p>
      <form onSubmit={this.handleSubmit} id='form'>
        <p>
          <label htmlFor="name">Name:</label><br/>
          <input name='name' type='text' value={this.state.name} onChange={this.nameChanged}/></p>
        <p>
          <label htmlFor="email">Email:</label><br/>
          <input name='email' type='text' value={this.state.email} onChange={this.emailChanged}/></p>
        <p>
          <label htmlFor="message">Message:</label><br/>
          <textarea name='message' cols='40' rows='10' type="text" value={this.state.message} onChange={this.messageChanged}/></p>
        <p><input type='submit' value='Send'/></p>
      </form>
    </div>)
  }
}

export default Contact

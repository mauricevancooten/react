import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
      nameErrors: [],
      emailErrors: [],
      messageErrors: []
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
  handleSubmit(e) {
    e.preventDefault()
    const {name, email, message} = this.state
    const nameErrors = validateName(name)
    const messageErrors = validateMessage(message)
    const emailErrors = validateEmail(email)
    if (nameErrors.length > 0 || emailErrors.length > 0 || messageErrors.length > 0) {
      this.setState({nameErrors, emailErrors, messageErrors})
      return
    }
    console.log('Sent')
  }
  render() {
    const {nameErrors, messageErrors, emailErrors} = this.state;
    return (
      <form onSubmit={this.handleSubmit} id='form'>
        <p>
          <label htmlFor='name'>Name:</label><br/>
          <input value={this.state.name} onChange={this.nameChanged}/>
          {nameErrors.map(error => (
            <span className='error' key={error}>Error: {error}</span>
          ))}
        </p>

        <p>
          <label htmlFor='email'>Email:</label><br/>
          <input name='email' type='text' value={this.state.email} onChange={this.emailChanged}/>
          {emailErrors.map(error => (
            <span className='error' key={error}>Error: {error}</span>
          ))}
        </p>
        <p>
          <label htmlFor='message'>Message:</label><br/>
          <textarea name='message' cols='40' rows='10' type='text' value={this.state.message} onChange={this.messageChanged}/>
          {messageErrors.map(error => (
            <span className='error' key={error}>Error: {error}</span>
          ))}
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>

    )
  }
}

function validateName(name) {
  const nameErrors = []
  if (name.length === 0) {
    nameErrors.push('Name can\'t be empty');
  }
  return nameErrors
}

function validateMessage(message) {
  const messageErrors = []
  if (message.length === 0) {
    messageErrors.push('Message can\'t be empty')
  }
  return messageErrors
}

function validateEmail(email) {
  const emailErrors = []
  if (email.length < 5) {
    emailErrors.push('Email should be at least 5 charcters long')
  } else if (email.split('').filter(x => x === '@').length !== 1) {
    emailErrors.push('Email should contain a @')
  } else if (email.indexOf('.') === -1) {
    emailErrors.push('Email should contain at least one dot')
  }
  return emailErrors
}

export default Contact

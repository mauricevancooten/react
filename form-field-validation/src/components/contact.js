import React, {Component} from 'react'

class Contact extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.nameChanged = this.nameChanged.bind(this)
    this.emailChanged = this.emailChanged.bind(this)
    this.messageChanged = this.messageChanged.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.state = {
      email: '',
      name: '',
      message: '',
      touched: {
        email: false,
        name: false,
        message: false
      }
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
    if (!this.canBeSubmitted()) {
      e.preventDefault()
      return
    }
    e.preventDefault()
    console.log('Sent')
  }
  canBeSubmitted() {
    const {email, name, message} = this.state;
    return (email.length > 0 && name.length > 0 && message.length > 0)
  }
  handleBlur(field) {
    return () => {
      this.setState({
        touched: {
          ...this.state.touched,
          [field]: true
        }
      })
    }
  }
  render() {
    const {email, name, message} = this.state;
    const isEnabled = email.length > 0 && name.length > 0 && message.length > 0
    function validate(name, email, message) {
      return {
        email: email.length === 0,
        name: name.length === 0,
        message: message.length === 0
      };
    }
    const errors = validate(this.state.name, this.state.email, this.state.message)
    const shouldMarkError = (field) => {
      const hasError = errors[field]
      const shouldShow = this.state.touched[field]
      return hasError
        ? shouldShow
        : false
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} id='form'>
          <p>
            <label htmlFor='name'>Name:</label><br/>
            <input className={shouldMarkError('name')
              ? 'error'
              : ''} onBlur={this.handleBlur('name')} name='name' type='text' value={this.state.name} onChange={this.nameChanged}/>
            <span className={shouldMarkError('name')
              ? ''
              : 'error-message'}>Required</span>
          </p>
          <p>
            <label htmlFor='email'>Email:</label><br/>
            <input className={shouldMarkError('email')
              ? 'error'
              : ''} onBlur={this.handleBlur('email')} name='email' type='text' value={this.state.email} onChange={this.emailChanged}/>
            <span className={shouldMarkError('email')
              ? ''
              : 'error-message'}>Required</span>
          </p>
          <p>
            <label htmlFor='message'>Message:</label><br/>
            <textarea className={shouldMarkError('message')
              ? 'error'
              : ''} onBlur={this.handleBlur('message')} name='message' cols='40' rows='10' type='text' value={this.state.message} onChange={this.messageChanged}/>
            <span className={shouldMarkError('message')
              ? ''
              : 'error-message'}>Required</span>
          </p>
          <p>
            <button disabled={!isEnabled}>Submit</button>
          </p>
        </form>
      </div>
    )
  }
}

export default Contact

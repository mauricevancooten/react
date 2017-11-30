import React, {Component} from 'react'
import axios from 'axios'

class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.titleChanged = this.titleChanged.bind(this)
    this.handleChanged = this.handleChanged.bind(this)
    this.contentChanged = this.contentChanged.bind(this)
    this.state = {
      title: '',
      handle: '',
      content: '',
      sent: false
    }
  }
  titleChanged(e) {
    this.setState({title: e.target.value})
  }
  handleChanged(e) {
    this.setState({handle: e.target.value})
  }
  contentChanged(e) {
    this.setState({content: e.target.value})
  }
  async handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await axios('/api', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({title: this.state.title, handle: this.state.handle, content: this.state.content})
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
      <h1>New Post</h1>
      <p className={this.state.sent
          ? ''
          : 'hide-text'}>Post Successful</p>
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="title">Title:</label><br/>
          <input onChange={this.titleChanged} type='text' name='title'/>
        </p>
        <p>
          <label htmlFor="handle">Handle:</label><br/>
          <input onChange={this.handleChanged} type='text' name='handle'/>
        </p>
        <p>
          <label htmlFor="content">Content:</label><br/>
          <textarea cols='30' rows='10' onChange={this.contentChanged} type='text' name='content'/>
        </p>
        <p><input type='submit' value='Submit'/></p>
      </form>
    </div>)
  }
}

export default CreatePost

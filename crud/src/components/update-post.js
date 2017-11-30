import React, {Component} from 'react'
import axios from 'axios'

class UpdatePost extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.titleChanged = this.titleChanged.bind(this)
    this.handleChanged = this.handleChanged.bind(this)
    this.contentChanged = this.contentChanged.bind(this)
    let title,
      handle,
      content,
      mongoId,
      created
    props.posts.map(post => {
      if (props.id === post.handle) {
        title = post.title,
        handle = post.handle,
        content = post.content
        mongoId = post._id
        created = post.created
      }
    })
    this.state = {
      title: title,
      handle: handle,
      content: content,
      mongoId: mongoId,
      created: created,
      updated: false,
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
      const res = await axios(`/api/${this.state.mongoId}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({title: this.state.title, handle: this.state.handle, content: this.state.content})
      })
      res.status === 200
        ? this.setState({updated: true})
        : this.setState({updated: false})
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (<div>
      <h1>Update Post</h1>
      <small>Created: {this.state.created}
        <br/>
        ID: {this.state.mongoId}
        <br/>
        <button onClick={this.handleClick}>Delete</button>
      </small>
      <p className={this.state.updated
          ? ''
          : 'hide-text'}>Post Updated Successfully</p>
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="title">Title:</label><br/>
          <input onChange={this.titleChanged} defaultValue={this.state.title} type='text' name='title'/>
        </p>
        <p>
          <label htmlFor="handle">Handle:</label><br/>
          <input onChange={this.handleChanged} defaultValue={this.state.handle} type='text' name='handle'/>
        </p>
        <p>
          <label htmlFor="content">Content:</label><br/>
          <textarea cols='100' rows='20' onChange={this.contentChanged} defaultValue={this.state.content} type='text' name='content'></textarea>
        </p>
        <p><input type='submit' value='Submit'/></p>
      </form>
    </div>)
  }
}

export default UpdatePost

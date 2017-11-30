import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class PostArchive extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      deleted: false
    }
  }
  async handleClick(e) {
    e.preventDefault()
    try {
      const res = await axios(`/api/${e.target.id}`, {method: 'DELETE'})
      res.status === 200
        ? this.setState({deleted: true})
        : this.setState({deleted: false})
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const {posts} = this.props
    return (<div>
      <h1>Post Archive</h1>
      <p className={this.state.deleted
          ? ''
          : 'hide-text'}>Post Deleted</p>
      <ul className='archive-list'>
        {
          posts.map((post, i) => {
            return <li key={i}>{post.title}
              <Link to={`/dashboard/${post.handle}`}>Edit</Link>
              <a id={post._id} onClick={this.handleClick}>Delete</a>
            </li>
          })
        }
      </ul>
    </div>)
  }
}
export default PostArchive

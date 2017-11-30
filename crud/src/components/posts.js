import React from 'react'
import {Link} from 'react-router-dom'

const Posts = ({posts}) => (
  <div>
    <h1>Articles</h1>
    <ul>
      {posts.map((post, i) => {
        return <li key={i}><Link to={`/${post.handle}`}>{post.title}</Link></li>
      })}
    </ul>
  </div>
)

export default Posts

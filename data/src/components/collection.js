import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Collection = (props) => (
  <div className='gallery'>
    {props.art.map((artist) => {
      return (
        <Link to={`/collection/${artist.handle}`} key={artist.id}><img src={artist.thumb} alt={artist.name}/></Link>
      )
    })}
  </div>
)

export default Collection

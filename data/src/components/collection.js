import React from 'react'
import {Link} from 'react-router-dom'

const Collection = ({art}) => (
  <div className='gallery'>
    {art.map((artist) => {
      return (
        <Link to={`/${artist.handle}`} key={artist.id}><img src={artist.thumb} alt={artist.name}/></Link>
      )
    })}
  </div>
)

export default Collection

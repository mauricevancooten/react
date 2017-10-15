import React from 'react'
import Artwork from './artwork'
import Pagination from './pagination'

const Artist = ({art, id}) => (
  <div>
    {art.map((artist) => {
      if (artist.handle === id) {
        return (<Artwork name={artist.name} picture={`../${artist.work}`} title={artist.title} medium={artist.medium} key={artist.id}/>)
      }
    })}
    <Pagination art={art} id={id}/>
  </div>
)

export default Artist

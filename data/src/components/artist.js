import React, {Component} from 'react'
import Artwork from './artwork'
import Pagination from './pagination'

const Artist = (props) => (
  <div>
    {props.art.map((artist) => {
      if (artist.handle === props.id) {
        return (<Artwork name={artist.name} picture={`../${artist.work}`} title={artist.title} medium={artist.medium} key={artist.id}/>)
      }
    })}
    <Pagination art={props.art} id={props.id}/>
  </div>
)

export default Artist

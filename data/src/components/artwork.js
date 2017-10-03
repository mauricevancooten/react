import React from 'react'

const Artwork = (props) => (
  <div>
    <h1>{props.name}</h1>
    <img src={props.picture} alt="props.title" />
    <p><strong>{props.title}</strong><br/>
      {props.medium}
    </p>
  </div>
)

export default Artwork

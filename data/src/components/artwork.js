import React from 'react'

const Artwork = ({name, picture, title, medium}) => (
  <div>
    <h1>{name}</h1>
    <img src={picture} alt="props.title" />
    <p><strong>{title}</strong><br/>
      {medium}
    </p>
  </div>
)

export default Artwork

import React from 'react'
import { urlFor } from '../client'

const Pin = ({key, pin : {psotedBy, image, _id, destination }, className}) => {
  return (
    <div>
        <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250)} />
    </div>
  )
}

export default Pin
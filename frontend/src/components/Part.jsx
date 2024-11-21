import React from 'react'

const Part = ({ part, link, likes }) => {
  console.log(part, link)
  return (
    <div>
      <p>
        <span>{part}</span>
        <a href={link}>Link</a>
        <p>{likes}</p>
      </p>
    </div>
  )
}

export default Part
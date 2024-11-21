import React from 'react'

const Part = ({ part, link }) => {
  console.log(part, link)
  return (
    <div>
      <p>
        <span>{part}</span>
        <a href={link}>Link</a>
      </p>
    </div>
  )
}

export default Part
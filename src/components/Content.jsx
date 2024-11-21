import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} link = {part.link}/>
      ))}
    </div>
  )
}
export default Content
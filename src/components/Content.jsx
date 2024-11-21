import React from 'react'
import Part from './Part'
import { useState } from 'react'

const Content = ({ parts }) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }
  
  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>Bấm vào nếu muốn não bạn to ra</button>
      </div>
      <div style={showWhenVisible}>
        {parts.map((part) => (
          <Part key={part.id} part={part.name} link = {part.link}/>
        ))}
        <button onClick={toggleVisibility}>Ẩn vào nếu bạn muốn ngu đi</button>
      </div>
    </div>
  )
}
export default Content
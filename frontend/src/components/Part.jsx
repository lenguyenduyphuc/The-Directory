import React from 'react'
import './Part.css'

const Part = ({ part, link, likes }) => {
  return (
    <div className="part-card">
      <div className="part-content">
        <h3 className="part-title">{part}</h3>
        <div className="part-details">
          <a href={link} className="part-link" target="_blank" rel="noopener noreferrer">
            Visit Link
            <span className="link-icon">→</span>
          </a>
          <div className="part-likes">
            <span className="likes-count">{likes}</span>
            <span className="likes-label">likes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part
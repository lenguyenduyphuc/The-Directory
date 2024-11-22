import React from 'react'
import './Part.css'

const Part = ({part, courseId, updatedCourse }) => {
  const updatedLike = () => {
    if (part && part.likes !== undefined) {
      const updatedLikePart = {
        ...part,
        likes: part.likes + 1,
      };
      updatedCourse(courseId, updatedLikePart._id, 1); // Ensure updatedCourse is properly passed
    } else {
      console.error('Error: Part or likes is undefined', part);
    }
  };

  const updatedDislike = () => {
    if (part && part.likes !== undefined) {
      const updatedDislikePart = {
        ...part,
        likes: part.likes - 1,
      };
      updatedCourse(courseId, updatedDislikePart._id, -1); // Pass the updated part object instead of just the ID
    } else {
      console.error('Error: Part or likes is undefined', part);
    }
  };
  
  return (
    <div className="part-card">
      <div className="part-content">
        <h3 className="part-title">{part.name}</h3>
        <div className="part-details">
          <a href={part.link} className="part-link" target="_blank" rel="noopener noreferrer">
            Visit Link
            <span className="link-icon">→</span>
          </a>
          <div className="part-likes">
            <span className="likes-count">{part.likes}</span>
            <span className="likes-label">likes</span>
            <button onClick={updatedLike}>Like</button>
            <button onClick={updatedDislike}>Dislike</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part
import React from 'react';
import './Part.css';

const Part = ({ part, courseId, updatedCourse }) => {
  const handleLike = () => {
    if (part && part.likes !== undefined) {
      updatedCourse(courseId, part._id, 1);
    }
  };

  const handleDislike = () => {
    if (part && part.likes !== undefined) {
      updatedCourse(courseId, part._id, -1);
    }
  };
  
  return (
    <div className="part-card">
      <h3 className="part-title">{part.name}</h3>
      <div className="part-details">
        <a href={part.link} className="part-link" target="_blank" rel="noopener noreferrer">
          Visit Link
          <span className="link-icon">→</span>
        </a>
        <div className="part-likes">
          <span className="likes-count">{part.likes}</span>
          <span className="likes-label">likes</span>
          <div className="button-group">
            <button onClick={handleLike} className="like-button" aria-label="Like">
              <span className="button-icon">👍</span>
            </button>
            <button onClick={handleDislike} className="dislike-button" aria-label="Dislike">
              <span className="button-icon">👎</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;


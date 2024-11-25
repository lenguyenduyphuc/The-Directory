import React, { useState } from 'react';
import Part from './Part';
import './Content.css';

const Content = ({ parts, courseId, updatedCourse }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  
  return (
    <div className="content-container">
      <button onClick={toggleVisibility} className="toggle-button">
        {!visible ? 'Bấm vào nếu muốn thông minh' : 'Ẩn vào nếu bạn không muốn thông minh'}
      </button>
      {visible && (
        <div className="parts-list">
          {parts.map((part) => (
            <Part
              key={part._id}
              part={part}
              courseId={courseId}
              updatedCourse={updatedCourse}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Content;


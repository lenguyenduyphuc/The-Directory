import React from 'react';
import Part from './Part';
import { useState } from 'react';
import './Content.css';

const Content = ({ parts, courseId, updatedCourse }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  
  return (
    <div className="content-container">
      <div className={!visible ? 'hidden-state' : 'visible-state'}>
        <button onClick={toggleVisibility} className="toggle-button">
          {!visible ? 'Bấm vào nếu muốn thông minh' : 'Ẩn vào nếu bạn không muốn thông minh'}
        </button>
      </div>
      {visible && (
        <div className="parts-list">
          {parts.map((part) => (
            <div key={part._id}>
                <Part
                  key={part._id}
                  part={part}
                  courseId={courseId}
                  updatedCourse={updatedCourse}
                />
            </div>
          ))} 
        </div>
      )}
    </div>
  );
};

export default Content;

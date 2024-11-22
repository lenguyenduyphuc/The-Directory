import React from 'react';
import Content from './Content';
import Header from './Header';
import './Course.css';

const Course = ({ course, updatedCourse }) => {
  return (
    <div className="course-container">
        <div key={course.id} className="course-card">
          <Header course={course.name} />
          <Content parts={course.parts} courseId={course.id} updatedCourse={updatedCourse} />
        </div>
    </div>
  );
};

export default Course;
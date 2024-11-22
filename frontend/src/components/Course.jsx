import { useState } from 'react';
import React from 'react';
import Content from './Content';
import Header from './Header';
import './Course.css';
const Course = ({ courses }) => {
  return (
    <div className="course-container">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <Header course={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;

import React from 'react'
import Content from './Content'
import Header from './Header'

const Course = ({ courses }) => {
    return (
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
          </div>
        ))}
      </div>
    )
}

export default Course
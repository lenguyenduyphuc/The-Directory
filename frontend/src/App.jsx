import { useState, useEffect } from "react";
import Course from "./components/Course";
import coursesHelper from "./components/course.helper";

const App = () => {
  const courses = coursesHelper;
  
  return (
    <Course courses={courses} />
  )
}

export default App
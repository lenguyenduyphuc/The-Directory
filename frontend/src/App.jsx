import { useState, useEffect } from "react";
import Course from "./components/Course";
import courseService from "./services/courses";

const App = () => {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    courseService.getAll().then((courses) => {
      setCourses(courses);
    });
  }, [])

  return (
    <Course courses={courses} />
  )
}

export default App
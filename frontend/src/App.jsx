import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import { LogOut, User } from "lucide-react";
import courseService from "./services/courses";
import loginService from "./services/login";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/CreateUserForm";
import Footer from "./components/Footer";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    courseService.getAll().then((courses) => {
      setCourses(courses);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      courseService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const user = await loginService.login(credentials);
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      loginService.setToken(user.token);
      setUser(user);
    } catch (exception) {
      console.log("Wrong credentials");
    }
  };

  const handleCreateUser = async (newUser) => {
    const returnedUser = await loginService.create(newUser);
    setUser(returnedUser);
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    window.localStorage.removeItem("loggedUser");
    setUser(null);
  };

  const updatedLike = (courseId, partId, delta) => {
    let updatedPart;
    const courseToUpdate = courses.find((c) => c.id === courseId);
    const partToUpdate = courseToUpdate.parts.find((p) => p._id === partId);
    if (partToUpdate.likes + delta < 0) {
      updatedPart = { ...partToUpdate, likes: 0 };
    } else {
      updatedPart = { ...partToUpdate, likes: partToUpdate.likes + delta };
    }

    courseService
      .update(courseId, updatedPart)
      .then((returnedPart) => {
        setCourses(
          courses.map((course) =>
            course.id !== courseId
              ? course
              : {
                  ...course,
                  parts: course.parts.map((part) =>
                    part._id !== partId
                      ? part
                      : { ...part, likes: returnedPart.likes }
                  ),
                }
          )
        );
      })
      .catch((error) => console.error("Error updating likes:", error));
  };

  return (
    <div className="app-background">
      {user === null ? (
        <div className="auth-container">
          <div className="auth-forms">
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={<LoginForm createLogin={handleLogin} />}
                />
                <Route
                  path="/signup"
                  element={<SignupForm createUser={handleCreateUser} />}
                />
              </Routes>
            </Router>
          </div>
        </div>
      ) : (
        <div className="main-container">
          <header className="app-header">
            <div className="user-info">
              <User className="user-icon" size={20} />
              <span className="user-name">{user.name} Log In</span>
            </div>
            <button onClick={handleLogout} className="logout-button">
              <span className="logout-text">Log Out </span>
              <LogOut className="logout-icon" size={18} />
            </button>
          </header>
          <div className="courses-wrapper">
            {courses.map((course) => (
              <Course
                key={course.id}
                course={{
                  ...course,
                  parts: [...course.parts].sort((a, b) => b.likes - a.likes),
                }}
                updatedCourse={updatedLike}
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;

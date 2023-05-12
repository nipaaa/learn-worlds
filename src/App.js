import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import CoursePage from "./components/Courses/CoursePage";
import NotFound from "./shared/NotFound";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import EventPage from "./components/Event/EventPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./pages/Login/Login";
import Main from "./shared/Main";
import Signup from "./pages/Signup/Signup";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import CourseDetailsPage from "./components/Courses/CourseDetailsPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courseDetails" element={<CourseDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;

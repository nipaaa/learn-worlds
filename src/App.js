import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
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
import Account from "./pages/Account/Account";
import CourseDetailsPage from "./components/Courses/CourseDetailsPage";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Classroom from "./pages/Classroom/Classroom";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import EventDetailsPage from "./components/Event/EventDetailsPage";
import EventForm from "./components/Event/EventForm";
import Learning from "./components/Learning/Learning";

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
          <Route path="/eventDetails" element={<EventDetailsPage />} />
          <Route path="/joinEvent" element={<EventForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/account" element={<Account />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/learning" element={<Learning />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;

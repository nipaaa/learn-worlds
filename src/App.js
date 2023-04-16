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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/contact" element={<ContactPage  />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

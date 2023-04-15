import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Home/Banner";
import Home from "./components/Home/Home";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import CoursePage from "./components/Courses/CoursePage";
import NotFound from "./shared/NotFound";
import AboutPage from "./components/About/AboutPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

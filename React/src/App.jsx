import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Weather from "./Component/Weather/Weather";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Project/Projects";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Weather />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Gallery from "./pages/Gallery";
import "./App.css";

const ScrollToTopOnRouteChange = ({ scrollRef }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, scrollRef]);
  return null;
};

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  const scrollContainerRef = useRef(null); // For scrollable container

  useEffect(() => {
    const container = scrollContainerRef.current || window;

    const handleScroll = () => {
      const scrollTop = container === window
        ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        : container.scrollTop;

      setShowScroll(scrollTop > 200);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const container = scrollContainerRef.current || window;
    if (container === window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      style={{
        minHeight: "100vh",
        overflowY: "auto",
        height: "100vh"
      }}
    >
      <Header />
      <ScrollToTopOnRouteChange scrollRef={scrollContainerRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />

      {showScroll && (
        <button
          className="scrollTop"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;

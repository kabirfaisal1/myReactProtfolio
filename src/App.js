import React, { useState, useEffect } from "react";

import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Skills from "./components/skill/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/resume/Resume";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
 import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
         <Navbar />
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/resume" element={<Resume />} /> TODO: will reenable later*/}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

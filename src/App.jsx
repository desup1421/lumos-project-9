import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
// LAYOUTS
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
// COMPONENTS
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="max-w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;

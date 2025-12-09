import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Import page components (will create these next)
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import AlumniNetworkPage from './pages/AlumniNetworkPage';
import ContactPage from './pages/ContactPage';

// Import Footer component
import Footer from './components/Footer';

// Simple navigation component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-container')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo-container">
          <img src="/assets/images/Rwamusa _logo.jpeg" alt="RWAMUSA Logo" className="logo-image" />
          <h1 className="logo-text">RWAMUSA</h1>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Events</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Gallery</NavLink></li>
          <li><NavLink to="/alumni-network" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Alumni</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/alumni-network" element={<AlumniNetworkPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
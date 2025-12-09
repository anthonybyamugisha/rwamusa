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
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo-container">
          <img src="/assets/images/Rwamusa _logo.jpeg" alt="RWAMUSA Logo" className="logo-image" />
          <h1 className="logo-text">RWAMUSA</h1>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink></li>
          <li><NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Events</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Gallery</NavLink></li>
          <li><NavLink to="/alumni-network" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Alumni</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
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
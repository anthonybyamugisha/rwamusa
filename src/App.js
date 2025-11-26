import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import page components (will create these next)
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import MembershipPage from './pages/MembershipPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExecutivePage from './pages/ExecutivePage';
import StudentCornerPage from './pages/StudentCornerPage';
import AlumniNetworkPage from './pages/AlumniNetworkPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

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
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/membership">Membership</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/news">News & Updates</a></li>
          <li><a href="/projects">Projects & Impact</a></li>
          <li><a href="/executive">Executive</a></li>
          <li><a href="/student-corner">Student Corner</a></li>
          <li><a href="/alumni-network">Alumni Network</a></li>
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
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/executive" element={<ExecutivePage />} />
            <Route path="/student-corner" element={<StudentCornerPage />} />
            <Route path="/alumni-network" element={<AlumniNetworkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
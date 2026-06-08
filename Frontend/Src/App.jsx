import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Resources from './Pages/Resources';
import Standards from './Pages/Standards';
import './Pages/PageStyles.css';

function App() {
  return (
    <Router>
      {/* Navbar is always visible on every page */}
      <Navbar />

      {/* Main content area — each route renders its Page component here */}
      <main>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<AboutUs />} />
          <Route path="/contact"    element={<Contact />} />
          <Route path="/resources"  element={<Resources />} />
          <Route path="/standards"  element={<Standards />} />
        </Routes>
      </main>

      {/* Footer is always visible on every page */}
      <Footer />
    </Router>
  );
}

export default App;

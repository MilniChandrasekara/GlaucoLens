import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

// Components
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Detection from './pages/Detection';
import Prevention from './pages/Prevention';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detection" element={<Detection />} />
            <Route path="/prevention" element={<Prevention />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Products from './pages/Products';
import Tenders from './pages/Tenders';
import Footer from './components/Footer';
import Downloads from './pages/Downloads';
import Jobs from './pages/Jobs';
import CookieConsent from './components/CookieConsent';
import { LanguageProvider } from './components/LanguageContext';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Cookies from './pages/Cookies';

function App() {
  return (
    
    
    
    <LanguageProvider>
      
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           < Route path="/cookies" element={<Cookies />} />
            {/* Add other routes */}
          </Routes>
          <Footer />
          <CookieConsent />
        </Router>
    </LanguageProvider>
  );
}

export default App;


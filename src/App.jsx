import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import About from './component/About';
import MoreAboutMe from './component/MoreAboutMe';
import PortfolioTabs from './component/PortfolioTabs';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';

function App() {
  return (
    <section className="grid-background min-h-screen text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                {/* <PortfolioContent /> */}
                <PortfolioTabs />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route path="/more-about-me" element={<MoreAboutMe />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;

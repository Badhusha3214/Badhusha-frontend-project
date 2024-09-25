import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedWorks from './components/FeaturedWorks';
import Services from './components/Services';
import Founder from './components/Founder'; 
import Testimonials from './components/Testimonials';
import Projects from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturedWorks />
      <Services />
      <Projects />
      <Founder /> 
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
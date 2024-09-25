import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedWorks from './components/FeaturedWorks';
import Services from './components/Services';
import Founder from './components/Founder'; // Corrected import name and assumed file name
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturedWorks />
      <Services />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Founder /> {/* Corrected usage */}
      <Footer />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SectionId.HOME);

  // Intersection Observer to update active nav link on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        // Use rootMargin to create a specific "active zone" in the middle of the screen
        // rather than relying on a threshold which can fail for long sections.
        // This triggers when a section crosses the horizontal line 40% down the viewport.
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0
      }
    );

    Object.values(SectionId).forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;
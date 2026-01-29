import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TheError from './components/TheError';
import TheCycle from './components/TheCycle';
import WhyFailed from './components/WhyFailed';
import Method from './components/Method';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import About from './components/About';
import SessionInfo from './components/SessionInfo';
import FaqFooter from './components/FaqFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TheError />
        <TheCycle />
        <WhyFailed />
        <Method />
        <TargetAudience />
        <Testimonials />
        <About />
        <SessionInfo />
        <FaqFooter />
      </main>
    </div>
  );
};

export default App;
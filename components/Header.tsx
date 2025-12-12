import React, { useState, useEffect } from 'react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder using text as requested, styled to look like a logo */}
          <div className="text-2xl font-bold tracking-tight text-[#111111]">
            PANTHER <span className="text-[#4568DC]">.</span>
          </div>
        </div>
        
        <div className="hidden md:block">
           <Button variant="primary" className="py-2 px-6 text-sm" href="#sessao">
             Agendar Sessão
           </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <img src="/logo.png" alt="Panther - Inteligência Emocional Financeira" className="h-44 w-auto object-contain" />
        </div>

        <div className="hidden md:block">
          <Button variant="primary" className="py-2 px-6 text-sm" href="https://cal.com/panther-consultoria-2/60min" target="_blank" rel="noopener noreferrer">
            Agendar Sessão
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
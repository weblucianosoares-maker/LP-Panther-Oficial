import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

const Method: React.FC = () => {
  const steps = [
    "Reprogramação emocional profunda",
    "Clareza financeira absoluta",
    "Organização simples e sustentável",
    "Construção de novos hábitos neurais",
    "Decisões conscientes e estratégicas"
  ];

  return (
    <section id="metodo" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-8 text-[#111111]">
              O Método Panther
            </h2>
            <p className="text-[#555555] text-lg mb-8 leading-relaxed">
              Não é sobre cortar o cafezinho. É sobre entender por que você precisa dele. 
              Nosso método atua na causa raiz dos seus comportamentos financeiros, 
              criando uma transformação de dentro para fora.
            </p>

            <ul className="space-y-6 mb-10">
              {steps.map((step, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#4568DC]" />
                  </div>
                  <span className="text-lg text-[#111111] font-medium">{step}</span>
                </li>
              ))}
            </ul>

            <Button href="https://cal.com/panther-consultoria-2/60min" target="_blank" rel="noopener noreferrer">
              Quero reprogramar minha vida financeira
            </Button>
          </div>

          {/* Diagram Representation */}
          <div className="flex-1 order-1 md:order-2 flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              
              {/* Emoção */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 md:w-60 md:h-60 bg-[#4568DC]/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm z-10 animate-pulse-slow">
                <span className="text-white font-bold text-xl">Emoção</span>
              </div>

              {/* Comportamento */}
              <div className="absolute bottom-0 left-0 w-48 h-48 md:w-60 md:h-60 bg-[#7A8BD1]/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm z-10">
                <span className="text-white font-bold text-xl">Comportamento</span>
              </div>

              {/* Finanças */}
              <div className="absolute bottom-0 right-0 w-48 h-48 md:w-60 md:h-60 bg-[#111111]/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm z-10">
                <span className="text-white font-bold text-xl">Finanças</span>
              </div>

              {/* Center Connect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl z-20 border-4 border-[#F3F4FF]">
                <div className="text-center p-2">
                  <span className="text-[#4568DC] font-extrabold text-[10px] md:text-xs block">INTELIGÊNCIA</span>
                  <span className="text-[#111111] font-extrabold text-[10px] md:text-xs block">EMOCIONAL</span>
                  <span className="text-[#555555] font-extrabold text-[10px] md:text-xs block">FINANCEIRA</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Method;
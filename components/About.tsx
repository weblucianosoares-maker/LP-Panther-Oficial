import React from 'react';
import Button from './Button';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Photo */}
          <div className="w-full md:w-1/3 max-w-sm">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-[#4568DC] rounded-[2rem] transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://picsum.photos/seed/adriana_portrait/500/600" 
                alt="Adriana Juwer" 
                className="relative w-full rounded-[2rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[4/5]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#111111] mb-2">Adriana Juwer</h2>
            <p className="text-[#4568DC] font-semibold mb-6 uppercase tracking-wider text-sm">Mentora Financeira & Comportamental</p>
            
            <div className="space-y-4 text-[#555555] text-lg mb-8">
              <ul className="space-y-4 list-disc pl-5">
                <li>Especialista em Inteligência Emocional Financeira.</li>
                <li>Une psicologia financeira e educação financeira estratégica.</li>
                <li>Criadora da Mentoria Reprogramação Emocional Financeira.</li>
                <li>Reconhecida pelos clientes por profundidade, cuidado e resultados reais.</li>
              </ul>
              
              <p className="border-l-4 border-[#4568DC] pl-6 py-2 bg-white rounded-r-lg mt-6 text-[#111111] font-medium italic">
                "Adriana não fala apenas de números; ela caminha junto com seus clientes para transformar a forma como pensam, sentem e agem com o dinheiro."
              </p>
            </div>

            <Button href="https://cal.com/panther-consultoria-2/60min" target="_blank" rel="noopener noreferrer">
              Quero falar com a Adriana
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
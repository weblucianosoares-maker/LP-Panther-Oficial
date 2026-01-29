import React from 'react';
import { Calculator, Heart, Brain, ArrowRight } from 'lucide-react';
import Button from './Button';

const WhyFailed: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#111111]">
          Por que nada funcionou até agora?
        </h2>
        
        <p className="max-w-3xl mx-auto text-[#555555] mb-16 text-lg">
          As soluções tradicionais olham para apenas uma parte do problema. 
          Para ter resultados definitivos, é preciso integrar três mundos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-400">Educação Financeira</h3>
            <p className="text-gray-400 text-sm">Foca apenas nos números e planilhas.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-400">Terapia Tradicional</h3>
            <p className="text-gray-400 text-sm">Foca nas emoções, sem estratégia financeira.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
             <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-400">Coaching de Metas</h3>
            <p className="text-gray-400 text-sm">Foca no futuro, ignorando os bloqueios atuais.</p>
          </div>
        </div>

        <div className="relative inline-block max-w-4xl mx-auto w-full">
           <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 hidden md:block"></div>
           
           <div className="bg-[#4568DC] text-white p-8 md:p-12 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
             <h3 className="text-2xl md:text-3xl font-bold mb-4">A Solução Panther</h3>
             <p className="text-blue-100 text-lg mb-0">
               Nós conectamos <span className="font-bold text-white">Números</span>, <span className="font-bold text-white">Emoções</span> e <span className="font-bold text-white">Decisão</span>.
             </p>
             <div className="mt-6 text-xl font-semibold uppercase tracking-wider">Inteligência Emocional Financeira</div>
           </div>
        </div>

        <div className="mt-16">
          <Button href="#metodo">
            Quero a solução completa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyFailed;
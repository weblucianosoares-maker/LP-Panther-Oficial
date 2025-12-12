import React from 'react';
import { BookOpen, TableProperties, Scissors, Clock } from 'lucide-react';
import Button from './Button';

const TheError: React.FC = () => {
  const errors = [
    { icon: <BookOpen className="w-8 h-8 text-[#4568DC]" />, title: "Cursos Teóricos" },
    { icon: <TableProperties className="w-8 h-8 text-[#4568DC]" />, title: "Planilhas Complexas" },
    { icon: <Scissors className="w-8 h-8 text-[#4568DC]" />, title: "Cortes Radicais" },
    { icon: <Clock className="w-8 h-8 text-[#4568DC]" />, title: "Trabalhar Mais" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#111111]">
            O erro que impede sua evolução financeira
          </h2>
          <p className="text-[#555555] text-lg mb-8">
            As pessoas tentam resolver problemas financeiros apenas com lógica. 
            Elas buscam cursos, planilhas e cortes de gastos. Mas a raiz é emocional.
          </p>
          <div className="bg-white inline-block px-8 py-4 rounded-full shadow-sm border border-[#E5E7EB]">
            <p className="text-[#4568DC] font-semibold text-xl">
              "95% das decisões financeiras são emocionais"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {errors.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5E7EB] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[#111111]">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#111111] font-bold text-xl mb-8">
            Mudar números sem mudar comportamento não funciona.
          </p>
          <Button variant="secondary" href="#ciclo">
            Quero descobrir onde estou errando
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TheError;
import React from 'react';
import { CalendarCheck, ShieldCheck, Map, Search } from 'lucide-react';
import Button from './Button';

const SessionInfo: React.FC = () => {
  const deliverables = [
    { icon: <Search className="w-6 h-6" />, text: "Leitura do padrão emocional financeiro" },
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Identificação dos gatilhos que sabotam o dinheiro" },
    { icon: <Map className="w-6 h-6" />, text: "Clareza sobre o cenário atual e rota inicial" },
    { icon: <CalendarCheck className="w-6 h-6" />, text: "Definição de prioridades e próximos passos" },
  ];

  return (
    <section id="sessao" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3F4FF] rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F3F4FF] rounded-tr-full -z-10"></div>

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
          Sessão de Alinhamento Emocional Financeiro
        </h2>
        <p className="text-xl text-[#555555] mb-12">
          Este é o seu primeiro passo para a liberdade real. Uma sessão exclusiva para mapear sua mente financeira.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
          {deliverables.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#4568DC] transition-colors">
              <div className="bg-blue-50 text-[#4568DC] p-3 rounded-lg">
                {item.icon}
              </div>
              <span className="font-medium text-[#111111]">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#4568DC]/5 p-6 rounded-lg mb-10 inline-block">
          <p className="text-sm text-[#555555] flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4568DC]" />
            A sessão é individual, sigilosa e personalizada, sempre com profundo respeito à sua história.
          </p>
        </div>

        <div className="flex justify-center">
          <Button fullWidth className="md:w-auto text-lg py-5 px-10 shadow-blue-500/40" href="#">
            Agendar minha Sessão de Alinhamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SessionInfo;
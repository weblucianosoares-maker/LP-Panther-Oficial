import React from 'react';
import { Target, TrendingUp, Users, Wallet } from 'lucide-react';
import Button from './Button';

const TargetAudience: React.FC = () => {
  const points = [
    { icon: <Wallet className="w-6 h-6" />, text: "Profissionais que ganham acima de R$ 8.000/mês" },
    { icon: <Users className="w-6 h-6" />, text: "Funcionários públicos, executivos, gerentes e empreendedores" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Sentem que o dinheiro não acompanha o crescimento profissional" },
    { icon: <Target className="w-6 h-6" />, text: "Já tentaram organizar finanças e não sustentaram a longo prazo" }
  ];

  return (
    <section className="py-24 bg-[#F3F4FF]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#111111] mb-6">
              Para quem é a Panther
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 inline-block">
              <p className="text-[#4568DC] font-semibold text-lg md:text-xl">
                "Esse trabalho foi criado para quem ganha bem, mas não vê o dinheiro ficar."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {points.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4 border border-transparent hover:border-[#4568DC]/30 transition-colors">
                <div className="bg-[#F3F4FF] p-3 rounded-lg text-[#4568DC]">
                  {point.icon}
                </div>
                <span className="text-[#555555] font-medium">{point.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="https://cal.com/panther-consultoria-2/60min" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              Sou esse perfil – quero avançar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
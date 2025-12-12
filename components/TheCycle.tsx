import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const TheCycle: React.FC = () => {
  const symptoms = [
    "Vive no limite financeiro, mesmo ganhando bem",
    "Sente culpa ao gastar com você mesmo",
    "Medo constante do futuro e da escassez",
    "Padrão de 'montanha-russa': junta e gasta tudo",
    "Não consegue conversar sobre dinheiro sem estresse",
    "Sensação de trabalhar muito e construir pouco"
  ];

  return (
    <section id="ciclo" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 w-full relative">
             <div className="absolute inset-0 bg-[#4568DC] rounded-2xl transform rotate-3 opacity-10"></div>
             <img 
               src="https://picsum.photos/seed/executive_stress/600/800" 
               alt="Executivo preocupado com finanças" 
               className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] lg:h-[600px]"
             />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8 text-[#111111]">
              Como vive quem está preso no ciclo
            </h2>
            <p className="text-[#555555] mb-8">
              Você reconhece esse cenário? A conta fecha no final do mês (ou quase), 
              mas a sensação de segurança nunca chega. O problema não é falta de renda, 
              é o padrão que se repete.
            </p>

            <div className="space-y-4 mb-10">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <AlertCircle className="w-6 h-6 text-[#4568DC] shrink-0 mt-0.5" />
                  <span className="text-[#111111] font-medium">{symptom}</span>
                </div>
              ))}
            </div>

            <Button href="#metodo" fullWidth className="md:w-auto">
              Quero sair desse ciclo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheCycle;
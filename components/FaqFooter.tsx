import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import Button from './Button';

const FaqFooter: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Serve para quem ganha menos de 8 mil?",
      a: "O método foi desenhado para quem já possui uma renda estabelecida e busca organizar a gestão e o emocional para alavancar patrimônio. Se sua renda é variável mas atinge esse patamar, também é para você."
    },
    {
      q: "Isso é terapia?",
      a: "Utilizamos ferramentas terapêuticas e de psicologia financeira, mas o foco é prático e direcionado para resultados financeiros. Não substitui terapia clínica para outros transtornos."
    },
    {
      q: "Preciso mostrar meus dados financeiros?",
      a: "Apenas o necessário para traçarmos a estratégia. O sigilo é absoluto e garantido em contrato."
    },
    {
      q: "Em quanto tempo começo a ver mudanças?",
      a: "Muitos clientes relatam alívio e clareza já na primeira sessão. A mudança comportamental sólida acontece ao longo da mentoria."
    },
    {
      q: "Funciona mesmo para quem já tentou de tudo?",
      a: "Sim, porque diferente de planilhas isoladas, nós tratamos a causa emocional que fez você abandonar as tentativas anteriores."
    }
  ];

  return (
    <>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#111111]">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-[#111111]">{faq.q}</span>
                  {openIndex === index ? (
                    <Minus className="text-[#4568DC] w-5 h-5" />
                  ) : (
                    <Plus className="text-[#4568DC] w-5 h-5" />
                  )}
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-40 py-5 opacity-100 border-t border-gray-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-[#555555]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-6 text-[#111111]">
              Se sua renda não reflete o esforço que você faz, não é falta de matemática. <br/>
              <span className="text-[#4568DC]">É falta de alinhamento emocional financeiro.</span>
            </h3>
            
            <Button href="#" className="w-full md:w-auto flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              Quero reprogramar meu padrão emocional
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] py-12 text-white border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tight">
            PANTHER <span className="text-[#4568DC]">.</span>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Panther Inteligência Emocional Financeira. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default FaqFooter;
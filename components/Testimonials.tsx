import React from 'react';
import { Quote } from 'lucide-react';
import Button from './Button';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Letícia Galvão",
      text: "Me ajudou a entender meus gatilhos e comportamentos financeiros. Hoje tenho paz.",
      role: "Advogada"
    },
    {
      name: "Ricardo Mendes",
      text: "Mudou completamente a forma como eu lido com o dinheiro e com minhas emoções.",
      role: "Diretor Comercial"
    },
    {
      name: "Ana Clara",
      text: "Foi um processo de muito aprendizado e transformação. A metodologia é única.",
      role: "Médica"
    },
    {
      name: "Felipe Santos",
      text: "Eu ganhava bem, mas vivia endividado. A Panther me deu o controle de volta.",
      role: "Empresário"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row gap-16">
          
          {/* Text/Cards Column */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-12 text-[#111111]">
              O que dizem nossos clientes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {reviews.map((review, i) => (
                <div key={i} className="bg-[#F9FAFF] p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <Quote className="w-8 h-8 text-[#4568DC]/30 mb-4" />
                  <p className="text-[#555555] italic mb-6 min-h-[60px]">"{review.text}"</p>
                  <div>
                    <strong className="block text-[#111111] font-bold">{review.name}</strong>
                    <span className="text-sm text-gray-400">{review.role}</span>
                  </div>
                </div>
              ))}
            </div>

            <Button href="https://cal.com/panther-consultoria-2/60min" target="_blank" rel="noopener noreferrer">
              Quero viver essa transformação
            </Button>
          </div>

          {/* Image Column */}
          <div className="flex-1 lg:max-w-xl">
             <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-2"></div>
                <img 
                  src="https://picsum.photos/seed/mentoring_meeting/600/800" 
                  alt="Sessão de mentoria online" 
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl bg-gray-200"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
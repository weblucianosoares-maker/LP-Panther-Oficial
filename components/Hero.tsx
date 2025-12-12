import React from 'react';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Gradient Strip */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4568DC] to-[#7A8BD1]" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#111111]">
              O problema não é dinheiro. <br />
              <span className="text-[#4568DC]">É emocional.</span>
            </h1>
            
            <p className="text-lg text-[#555555] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Você ganha bem, trabalha muito, mas sente que o dinheiro não acompanha. 
              A Panther revela e reprograma os padrões emocionais que controlam suas decisões financeiras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#sessao">
                Agendar minha Sessão de Alinhamento
              </Button>
              <Button variant="outline" href="#metodo">
                Quero entender meu padrão
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Abstract decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7A8BD1]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4568DC]/10 rounded-full blur-3xl"></div>
              
              <img 
                src="https://picsum.photos/seed/brain-finance/600/600" 
                alt="Conexão entre mente e finanças" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#4568DC]">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
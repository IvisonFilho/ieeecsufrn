import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Brain, Laptop } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-hero text-primary-foreground min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Texto principal */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            IEEE Computer Society
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed ">
            Conectamos estudantes e profissionais em torno da computação, com projetos, eventos e aprendizado real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start md:ml-20">
            <Button
              size="lg"
              className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            >
              Junte-se a nós →
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-6 py-3 text-black border-black bg-white hover:bg-neutral-800 hover:text-white transition-colors duration-300"
            >
              Ver atividades
            </Button>
          </div>

          {/* Métricas curtas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 justify-items-start">
            <div className="text-center">
              <Users className="mx-auto mb-2 h-7 w-7" />
              <div className="text-2xl font-bold">+200</div>
              <div className="text-sm opacity-80">Membros impactados</div>
            </div>
            <div className="text-center">
              <Brain className="mx-auto mb-2 h-7 w-7" />
              <div className="text-2xl font-bold">+30</div>
              <div className="text-sm opacity-80">Projetos realizados</div>
            </div>
            <div className="text-center">
              <Laptop className="mx-auto mb-2 h-7 w-7" />
              <div className="text-2xl font-bold">+15</div>
              <div className="text-sm opacity-80">Eventos organizados</div>
            </div>
          </div>
        </div>

        {/* Imagem ilustrativa */}
        <div className="md:w-1/2">
          <img
            src="/ImgHeroSection/Connected world-rafiki.png"
            alt="Imagem representando tecnologia e comunidade"
            className="w-full max-w-md mx-auto"
          />
          {/* Crédito da imagem */}
          <div className="text-xs opacity-60 mt-2 text-center">
            <a
              href="https://storyset.com/people"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              People illustrations by Storyset
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

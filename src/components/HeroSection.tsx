  import { Button } from "@/components/ui/button";
  import { ArrowRight, Users, Brain, Laptop } from "lucide-react";

  const HeroSection = () => {
    return (
      <section id="hero" className="bg-gradient-hero text-primary-foreground min-h-screen flex items-center pb-12">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* Texto principal */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              IEEE Computer Society
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              Conectamos estudantes e profissionais em torno da computação, com projetos, eventos e aprendizado real.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 bg-white text-primary font-semibold border border-primary shadow-md hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-200"
              >
                Junte-se a nós →
              </Button>

              <Button
                size="lg"
                className="text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent transition-colors duration-300 hover:scale-105 transition-all duration-200"
              >
                Ver atividades
              </Button>
            </div>

            {/* Métricas curtas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 sm:mt-12 justify-items-center sm:justify-items-start">
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
              className="w-full max-w-xs sm:max-w-md mx-auto"
            />
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

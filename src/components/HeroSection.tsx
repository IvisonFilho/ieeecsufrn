import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileText, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-hero text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            IEEE Computer Society
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Conectando profissionais de tecnologia e estudantes através de conhecimento, 
            networking e oportunidades de crescimento na área de computação e engenharia.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-1">375k+</div>
              <div className="text-sm opacity-80">Comunidades</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <FileText className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-1">926k+</div>
              <div className="text-sm opacity-80">Artigos da Biblioteca Digital</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-80">Anos de História</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

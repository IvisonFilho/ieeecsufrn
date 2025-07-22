import { Card } from "@/components/ui/card";
import ieeeHeroImage from "@/assets/ieee-mission-hero.jpg";

const MissionSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden shadow-ieee">
              <img 
                src={ieeeHeroImage} 
                alt="Profissional trabalhando"
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Nossa Missão
              </span>
              <h2 className="text-4xl font-bold text-foreground">
                Conheça nossa missão, visão e valores que nos guiam diariamente.
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é promover o avanço da tecnologia da informação através da 
              educação, pesquisa e desenvolvimento profissional. Conectamos estudantes 
              e profissionais para criar uma comunidade forte e colaborativa.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Educação Contínua</h4>
                  <p className="text-muted-foreground">
                    Promovemos workshops, seminários e cursos para manter nossos membros 
                    atualizados com as últimas tecnologias.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Networking Profissional</h4>
                  <p className="text-muted-foreground">
                    Criamos oportunidades para conexões profissionais que podem 
                    transformar carreiras e projetos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Inovação e Pesquisa</h4>
                  <p className="text-muted-foreground">
                    Apoiamos projetos de pesquisa e iniciativas inovadoras que 
                    impactam positivamente a sociedade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
import { Card } from "@/components/ui/card";
import ieeeHeroImage from "@/assets/ieee-mission-hero.jpg";

const AboutUsSection = () => {
  return (
    <section id="about" className="py-24 bg-background">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="order-2 lg:order-1 flex justify-center">
            <Card className="shadow-ieee p-6 w-full max-w-xl">
              <img
                src="/ImgAbout/About us page-cuate.svg"
                alt="Sobre Nós"
                className="w-full h-auto object-contain"
              />
            </Card>
          </div>



          {/* Conteúdo */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Sobre Nós
              </span>
              <h2 className="text-4xl font-bold text-foreground">
                Conheça quem somos e como atuamos para transformar o futuro da computação.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Reunindo engenheiros da computação, cientistas, acadêmicos e profissionais da indústria de todas as áreas da computação, a IEEE Computer Society estabelece o padrão em educação e engajamento que impulsiona o avanço tecnológico global. Por meio de conferências, publicações e programas — e ao conectar líderes da área em todas as fases da carreira para promover diálogo, debate e colaboração — a IEEE CS capacita, molda e orienta o futuro não apenas de seus membros, mas de toda a indústria, criando novas oportunidades para melhor servir a sociedade.
            </p>
            
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Educação Contínua</h4>
                  <p className="text-muted-foreground">
                    Promovemos workshops, seminários e cursos para manter nossos membros atualizados com as últimas tecnologias.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Networking Profissional</h4>
                  <p className="text-muted-foreground">
                    Criamos oportunidades para conexões profissionais que podem transformar carreiras e projetos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Inovação e Pesquisa</h4>
                  <p className="text-muted-foreground">
                    Apoiamos projetos de pesquisa e iniciativas inovadoras que impactam positivamente a sociedade.
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

export default AboutUsSection;

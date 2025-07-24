import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import ieeeChapterImage from "@/assets/ieee-chapter.jpg";

const benefits = [
  "Acesso a eventos exclusivos e workshops especializados",
  "Networking com profissionais renomados da área",
  "Certificações reconhecidas internacionalmente",
  "Mentoria personalizada para desenvolvimento de carreira"
];

const stats = [
  { number: "375.000+", label: "Membros Ativos" },
  { number: "4,118+", label: "Eventos técnicos e de networking" },
  { number: "1.031+", label: "Capítulos representando 157 países" }
];

const JoinSection = () => {
  return (
    <section id="join" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Junte-se ao nosso capítulo
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Faça parte da maior comunidade de profissionais de computação do mundo. 
                Conecte-se, aprenda e cresça com especialistas da indústria.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://www.computer.org/membership/join', '_blank')}
              >
                Tornar-se Membro
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://www.computer.org/membership', '_blank')}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Image */}
          <div>
            <Card className="overflow-hidden shadow-ieee">
              <img 
                src={ieeeChapterImage}
                alt="Equipe IEEE trabalhando em colaboração"
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
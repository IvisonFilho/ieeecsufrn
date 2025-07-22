import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Award } from "lucide-react";

const activities = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Eventos e Workshops Empreendedores",
    description: "Organizamos regularmente workshops práticos, seminários técnicos e eventos de networking para promover o aprendizado contínuo e o desenvolvimento de habilidades empreendedoras entre nossos membros."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Capacitação de Liderança e Impacto Social",
    description: "Desenvolvemos programas de liderança focados em formar profissionais capazes de gerar impacto positivo na sociedade através da tecnologia e inovação responsável."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Certificação de Carreira e Oportunidades",
    description: "Oferecemos programas de certificação reconhecidos pela indústria e criamos pontes entre nossos membros e oportunidades de carreira em empresas parceiras de tecnologia."
  }
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium uppercase tracking-wide text-primary">Inovação</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossas Atividades e Serviços para a Comunidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como nossa organização contribui para o desenvolvimento da 
            comunidade tecnológica através de programas estruturados e impactantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="text-center hover:shadow-ieee transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent rounded-full">
                    {activity.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
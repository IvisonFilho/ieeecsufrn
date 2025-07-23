import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Rafael Sol",
    role: "Presidente",
    description: "Doutora em Ciência da Computação com mais de 15 anos de experiência em IA e Machine Learning.",
    image: "/imageequipe/IEEE-1-2.png",
    linkedin: "https://www.linkedin.com/in/rafael-sol-dos-santos/",
    email: "rafael.sol@example.com"
  },
  {
    name: "Prof. Sebastião Lopes",
    role: "Vice-Presidente",
    description: "Professor de Engenharia de Software e especialista em desenvolvimento de sistemas distribuídos.",
    image: "./imageequipe/IEEE-2.png",
    linkedin: "https://www.linkedin.com/in/sebastiaofellipe/",
    email: "sebastiao.lopes@example.com"
  },
  {
    name: "Dr. Cipriano José",
    role: "Secretário",
    description: "Gerente de Projetos com expertise em organização de eventos técnicos e workshops educacionais.",
    image: "./imageequipe/IEEE-3.png",
    linkedin: "https://www.linkedin.com/in/victorbxavier/",
    email: "cipriano.jose@example.com"
  },
  {
    name: "Dr. Victor Xavier",
    role: "Tesoureiro",
    description: "Pesquisador em Computação Quântica e professor universitário com múltiplas publicações.",
    image: "./imageequipe/IEEE-4.png",
    linkedin: "https://www.linkedin.com/in/victorbxavier/",
    email: "victor.xavier@example.com"
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium uppercase tracking-wide text-primary">Equipe</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Nossa Equipe</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os profissionais dedicados que lideram nossa organização e trabalham 
            incansavelmente para promover o avanço da tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-ieee transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-primary/10"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium text-sm mb-3">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

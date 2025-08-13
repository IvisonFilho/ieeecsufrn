import { useState } from "react";
import { Card } from "@/components/ui/card";

const AboutUsSection = () => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Imagem */}
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
                Somos a IEEE Computer Society UFRN
              </h2>
              <p className="text-lg text-muted-foreground">
                Um grupo de estudantes apaixonados por tecnologia, inovação e impacto social.
              </p>
            </div>

            {/* Resumo rápido */}
            <p className="text-muted-foreground leading-relaxed">
              Organizamos eventos, minicursos e projetos que conectam alunos, mercado e inovação tecnológica — formando os líderes da computação de amanhã.
            </p>

            {/* Lista de benefícios */}
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Aprenda com workshops, palestras e eventos práticos</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Conecte-se com profissionais e empresas da área</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Desenvolva habilidades técnicas e de liderança</span>
              </li>
            </ul>

            {/* Texto completo opcional */}
            {showFullText && (
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                A Computer Society UFRN (CS UFRN) é o capítulo estudantil da IEEE Computer Society vinculado ao ramo IEEE da Universidade Federal do Rio Grande do Norte. Formada por estudantes voluntários, a CS UFRN atua no desenvolvimento de atividades educacionais, técnicas e sociais voltadas à área de computação, com o objetivo de gerar impacto positivo tanto na comunidade acadêmica quanto na sociedade em geral.
                <br /><br />
                Entre as iniciativas promovidas pelo grupo estão palestras, workshops, minicursos e eventos temáticos, sempre com foco no compartilhamento de conhecimento, na capacitação de estudantes e na aproximação entre universidade, mercado e inovação tecnológica.
                <br /><br />
                A CS UFRN é um espaço de aprendizado, colaboração e crescimento profissional, que incentiva o protagonismo estudantil e o desenvolvimento de competências técnicas e interpessoais essenciais para a formação de futuros líderes da tecnologia.
              </p>
            )}

            {/* Botão para expandir/recolher */}
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-primary font-medium hover:underline"
            >
              {showFullText ? "Mostrar menos" : "Saiba mais"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

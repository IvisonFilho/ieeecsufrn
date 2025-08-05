import { MembershipChart } from "@/components/MembershipChart"; // ajuste o caminho conforme sua estrutura

const InfoSection = () => {
  return (
    <section id="benefits" className="py-20 bg-[#0d0d0d] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full mb-4">
              <span className="text-sm font-medium uppercase tracking-wide">Benefícios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Por que ser membro?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Descubra as vantagens exclusivas de fazer parte da maior comunidade de profissionais de tecnologia do mundo.
            </p>
          </div>

          {/* Heading 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Benefícios da Participação</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Como membro do IEEE Computer Society, você terá acesso a uma rede global de
              profissionais, recursos educacionais exclusivos, publicações técnicas de alto
              nível e oportunidades de desenvolvimento profissional contínuo que irão
              acelerar sua carreira na área de tecnologia.
            </p>
          </div>

          {/* Heading 3 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Oportunidades de Crescimento</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Oferecemos mentorias personalizadas, workshops especializados, certificações
              reconhecidas internacionalmente e programas de liderança que preparam nossos
              membros para assumir posições de destaque na indústria tecnológica.
            </p>
          </div>

          {/* Heading 4 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Comunidade e Networking</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Faça parte de uma comunidade vibrante que inclui estudantes, profissionais
              experientes, pesquisadores e líderes de empresas. Participe de eventos
              exclusivos, grupos de interesse especial e fóruns de discussão onde você
              pode compartilhar conhecimento e criar conexões valiosas. Segue o Crescimento de 
              membros nos últimos meses, refletindo o aumento do interesse e participação na IEEE Computer Society:
            </p>

            <div className="mt-8 flex flex-col items-center bg-primary-foreground/20 rounded-xl p-8">
              <div className="mt-8 w-full">
                <MembershipChart />
              </div>
            </div>




          </div>

          {/* Heading 5 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Recursos Exclusivos</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Acesse nossa biblioteca digital com milhares de artigos técnicos,
              revistas especializadas, whitepapers e research papers. Além disso,
              tenha desconto em conferências internacionais, cursos online e
              ferramentas de desenvolvimento profissional.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <a 
                href="/" 
                className="flex items-center space-x-2 hover:opacity-90 transition-opacity cursor-pointer"
                onClick={() => window.location.reload()}
              >
                <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">IEEE</span>
                </div>
                <span className="font-semibold text-lg">Computer Society</span>
              </a>
            </div>
            <p className="text-sm opacity-90">
              Conectando profissionais de tecnologia e promovendo o avanço da computação 
              através de educação, networking e inovação.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-6 pt-4">
              <a 
                href="https://www.linkedin.com/company/csufrn/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://x.com/computersociety?lang=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                title="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://www.facebook.com/csufrn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                title="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://youtube.com/ieeecomputersociety" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                title="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#about" 
                  className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#benefits')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a 
                  href="#events" 
                  className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Eventos
                </a>
              </li>
              <li>
                <a 
                  href="#activities" 
                  className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#activities')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Atividades
                </a>
              </li>
              <li>
                <a 
                  href="#join" 
                  className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Junte-se a nós
                </a>
              </li>
            </ul>
          </div>

          {/* Services 
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Workshops</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Certificações</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Mentoria</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Networking</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Publicações</a></li>
            </ul>
          </div>*/}

          {/* Contact */}
          <div className="space-y-6 ">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-75" />
                <a 
                  href="mailto:contato@ieeecomputersociety.org"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  contato@ieeecomputersociety.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-75" />
                <a 
                  href="tel:+5511999999999"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  (714) 821-8380
                </a>
              </div>
              {/*
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 opacity-75 mt-0.5" />
                <span className="opacity-90">
                  Rua da Tecnologia, 123<br />
                  São Paulo, SP - 01234-567
                </span>
              </div>
              */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75">
              © 2025 IEEE Computer Society. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://privacy.ieee.org/policies" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
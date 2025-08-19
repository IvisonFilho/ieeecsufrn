import { Mail, Phone, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">

          {/* Company Info */}
          <div className="flex flex-col items-center space-y-6">
            <a 
              href="/" 
              className="inline-block m-[1.2rem] hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <img
                src="/logoieee/IEEE-CS-Logo-big.png"
                alt="Logo IEEE Computer Society"
                className="h-16 w-auto"
              />
            </a>

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
              {[
                { href: '#about', label: 'Sobre Nós' },
                { href: '#benefits', label: 'Benefícios' },
                { href: '#team', label: 'Nossa Equipe' },
                { href: '#events', label: 'Eventos' },
                { href: '#activities', label: 'Atividades' },
                { href: '#join', label: 'Junte-se a nós' }
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6 ">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-75" />
                <a 
                  href="mailto:cs.ieee.ufrn@gmail.com"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  cs.ieee.ufrn@gmail.com
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

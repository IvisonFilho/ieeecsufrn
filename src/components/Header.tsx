import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur text-primary-foreground shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a 
              href="/" 
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                <span className="text-primary font-bold text-sm">IEEE</span>
              </div>
              <span className="font-semibold text-lg">Computer Society</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#hero" 
              className="hover:text-accent-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Início
            </a>
            <a 
              href="#about" 
              className="hover:text-accent-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sobre Nós
            </a>
            <a 
              href="#benefits" 
              className="hover:text-accent-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#benefits')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Benefícios
            </a>
            <a 
              href="#team" 
              className="hover:text-accent-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Equipe
            </a>
            <a 
              href="#activities" 
              className="hover:text-accent-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#activities')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Atividades
            </a>
            <a 
              href="#events" 
              className="hover:text-accent-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Eventos
            </a>
            <a 
              href="#join" 
              className="hover:text-accent-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Junte-se a nós
            </a>
            <a 
              href="#contact" 
              className="hover:text-accent-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
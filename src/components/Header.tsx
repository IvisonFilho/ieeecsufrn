import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Início" },
    { href: "#about", label: "Sobre Nós" },
    { href: "#benefits", label: "Benefícios" },
    { href: "#team", label: "Equipe" },
    { href: "#activities", label: "Atividades" },
    { href: "#events", label: "Eventos" },
    { href: "#join", label: "Junte-se a nós" },
    { href: "#contact", label: "Contato" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    const element = document.querySelector(href);
    if (!element) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0; // altura real do header

    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const scrollToPosition = elementTop - headerHeight;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };



  return (
    <header className="sticky top-0 z-50 bg-primary-foreground text-primary shadow-md transition-all duration-300">

      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <div className="inline-block m-[1.2rem]">
                <img
                  src="/logoieee/IEEE-CS-UFRN-Horz.png"
                  alt="Logo IEEE Computer Society"
                  className="h-10 w-auto"
                />
              </div>



            </a>
          </div>

          {/* Navbar desktop hover:bg-yellow-200 */}
          <nav className="hidden md:flex items-center space-x-8 ">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-accent-foreground hover:font-bold transition-colors cursor-pointer"
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Botão menu mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-primary-foreground text-primary p-4 flex flex-col space-y-4 divide-y divide-gray-300">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="py-3 hover:text-accent transition-colors"
              onClick={(e) => handleLinkClick(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}

    </header>
  );
};

export default Header;

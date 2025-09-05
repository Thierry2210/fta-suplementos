import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-button bg-clip-text text-transparent">
            FTA SUPLEMENTOS
          </h1>
          <span className="text-primary-glow">💜</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
            Produtos
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
        </nav>
        
        <a 
          href="https://www.instagram.com/fta_suplementoss/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button variant="hero" size="sm" className="gap-2">
            <Instagram size={16} />
            Peça no DM
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
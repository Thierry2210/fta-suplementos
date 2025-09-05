import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-button bg-clip-text text-transparent">
                FTA SUPLEMENTOS
              </span>
            </h2>
            <p className="text-xl text-primary-glow font-semibold mb-2">
              💜 Suplementos Premium 💜
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transforme seus treinos com produtos de qualidade superior. 
              Entre em contato e faça seu pedido hoje mesmo!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.instagram.com/fta_suplementoss/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="gap-3">
                <MessageCircle size={20} />
                Peça no Direct
              </Button>
            </a>
            
            <a 
              href="https://www.instagram.com/fta_suplementoss/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-3">
                <Instagram size={20} />
                @fta_suplementoss
              </Button>
            </a>
          </div>
          
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; 2024 FTA Suplementos. Todos os direitos reservados.</p>
              <div className="flex items-center gap-4">
                <span>🚀 Entrega rápida!</span>
                <span>💪 Potencialize seu treino!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
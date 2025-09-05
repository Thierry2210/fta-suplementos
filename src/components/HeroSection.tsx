import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Gym equipment with purple lighting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-button bg-clip-text text-transparent">
              FTA SUPLEMENTOS
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-primary-glow font-semibold flex items-center justify-center gap-2">
            <span>💜</span>
            <span>Suplementos Premium</span>
            <span>💜</span>
          </div>
          
          <div className="space-y-4 text-lg md:text-xl text-foreground/90">
            <p className="flex items-center justify-center gap-2">
              <span>💪</span>
              <span>Potencialize seu treino!</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>🚀</span>
              <span>Entrega rápida!</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a 
              href="https://www.instagram.com/fta_suplementoss/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="gap-3 text-lg px-8 py-6">
                <MessageCircle size={20} />
                📩 Peça já por Direct (DM)!
              </Button>
            </a>
            
            <a 
              href="https://www.instagram.com/fta_suplementoss/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-3 text-lg px-8 py-6">
                <Instagram size={20} />
                @fta_suplementoss
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/50 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm">Ver Produtos</span>
          <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center mt-2">
            <div className="w-2 h-2 bg-current rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Target, Truck, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: "Qualidade Premium",
      description: "Produtos selecionados com os mais altos padrões de qualidade"
    },
    {
      icon: <Truck size={24} />,
      title: "Entrega Rápida",
      description: "Receba seus suplementos rapidamente em todo o Brasil"
    },
    {
      icon: <Shield size={24} />,
      title: "Garantia Total",
      description: "Produtos originais com garantia de procedência"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-button bg-clip-text text-transparent">
                  Sobre a FTA
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Na FTA Suplementos, nossa missão é fornecer produtos de alta qualidade 
                para quem busca resultados reais. Acreditamos que cada treino merece 
                o melhor suporte nutricional.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <div className="text-primary mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-button mx-auto flex items-center justify-center text-3xl">
                👤
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Luis Tamelini</h3>
                <p className="text-primary font-semibold">Founder da FTA Suplementos</p>
              </div>
              
              <p className="text-muted-foreground">
                "Minha paixão por fitness e nutrição me levou a criar a FTA. 
                Aqui, cada produto é escolhido pensando no seu sucesso."
              </p>
              
              <a 
                href="https://www.instagram.com/luistamelini" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero" className="gap-2">
                  <Instagram size={20} />
                  @luistamelini
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
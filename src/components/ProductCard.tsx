import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard = ({ name, description, image, price }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-button bg-clip-text text-transparent">
            {price}
          </span>
          
          <a 
            href="https://www.instagram.com/fta_suplementoss/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="sm" className="gap-2">
              <Instagram size={16} />
              Comprar
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
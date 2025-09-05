import ProductCard from "./ProductCard";
import wheyImage from "@/assets/whey-protein.jpg";
import creatineImage from "@/assets/creatine.jpg";
import proteinBarImage from "@/assets/protein-bar.jpg";
import peanutButterImage from "@/assets/peanut-butter.jpg";

const ProductsSection = () => {
  const products = [
    {
      name: "Whey Protein",
      description: "Proteína isolada de alta qualidade para máxima absorção e resultados.",
      image: wheyImage,
      price: "R$ 89,90"
    },
    {
      name: "Creatina",
      description: "Aumente sua força e resistência nos treinos mais intensos.",
      image: creatineImage,
      price: "R$ 59,90"
    },
    {
      name: "Barra Proteica",
      description: "Sabor incrível com alta concentração de proteínas para o seu dia.",
      image: proteinBarImage,
      price: "R$ 6,90"
    },
    {
      name: "Pasta de Amendoim",
      description: "Fonte natural de gorduras boas e proteínas para sua dieta.",
      image: peanutButterImage,
      price: "R$ 19,90"
    }
  ];

  return (
    <section id="produtos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-button bg-clip-text text-transparent">
              Nossos Produtos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os melhores suplementos para potencializar seus resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="animate-in fade-in slide-in-from-bottom-10"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
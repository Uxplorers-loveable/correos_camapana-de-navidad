import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-santa-ceo.jpg";
import Snowfall from "@/components/Snowfall";
import { Gift, TrendingUp, Heart } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)]">
      <Snowfall />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium text-primary">
                🎅 Una nueva línea de regalos del mejor CEO del mundo
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Smart Gifts <span className="text-primary">by Skandia</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Papá Noel se reinventó. Ya no reparte cosas que se acaban, ahora regala 
                <span className="text-primary font-semibold"> crecimiento, oportunidades y futuro</span>.
              </p>
              
              <p className="text-lg text-foreground">
                Regala una inversión que perdurará para siempre. Convierte un momento especial 
                en una oportunidad que crece con el tiempo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(var(--christmas-gold))] to-[hsl(var(--christmas-red))] text-white font-semibold shadow-[var(--shadow-festive)] hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate("/crear-regalo")}
                >
                  <Gift className="mr-2 h-5 w-5" />
                  Crear mi Smart Gift
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => navigate("/activar")}
                >
                  Activar mi regalo
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Papá Noel CEO" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué Smart Gifts?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No es la cantidad de cosas lo que te hace rico, es tener un plan que te libere de necesitarlas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-shadow duration-300 card-reveal">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gift className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Regala crecimiento</h3>
              <p className="text-muted-foreground">
                Cada Smart Gift es una inversión que crece con el tiempo. No es un objeto, es una oportunidad.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-shadow duration-300 card-reveal" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Invierte en el futuro</h3>
              <p className="text-muted-foreground">
                Construye un portafolio, crea un fondo de emergencia o empieza tu primera inversión.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-shadow duration-300 card-reveal" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personaliza tu regalo</h3>
              <p className="text-muted-foreground">
                Elige el diseño, el monto, la ocasión y añade un mensaje que perdure para siempre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-[hsl(182,75%,22%)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            El regalo más inteligente de esta Navidad
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Papá Noel y Skandia están listos para ayudarte a crear un regalo que nunca se olvidará
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold shadow-2xl hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/crear-regalo")}
          >
            <Gift className="mr-2 h-5 w-5" />
            Comenzar ahora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

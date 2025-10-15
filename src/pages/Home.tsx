import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Snowfall from "@/components/Snowfall";
import { Gift } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Snowfall />
      
      {/* Hero Section - Inspired by Apple */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Un regalo que crece con el tiempo.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Papá Noel y Skandia presentan los Smart Gifts: una nueva forma de regalar oportunidades.
            </p>
              
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Button 
                size="lg"
                variant="skandia"
                onClick={() => navigate("/crear-regalo")}
                className="text-base px-8"
              >
                Crear mi Smart Gift
              </Button>
              
              <Button 
                size="lg"
                variant="ghost"
                className="text-base"
                onClick={() => navigate("/activar")}
              >
                Activar mi regalo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <Gift className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-semibold">Regala con propósito</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada Smart Gift es una inversión que crece con el tiempo. Elige el diseño, el monto y añade un mensaje personalizado.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-semibold">Construye futuro</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tu regalo se convierte en el primer paso hacia la libertad financiera. Un asesor Skandia guiará cada decisión.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

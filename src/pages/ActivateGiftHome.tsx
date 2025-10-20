import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Gift, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-couple-gift.jpg";
import santaHat from "@/assets/santa-hat-clean.png";

const ActivateGiftHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/40"></div>
          <div className="absolute top-40 left-32 w-2 h-2 rounded-full bg-destructive/30"></div>
          <div className="absolute top-60 left-20 w-4 h-4 rounded-full bg-yellow-400/40"></div>
          <div className="absolute top-32 right-40 w-3 h-3 rounded-full bg-primary/50"></div>
          <div className="absolute top-80 right-20 w-2 h-2 rounded-full bg-blue-400/30"></div>
          <div className="absolute bottom-40 left-40 w-3 h-3 rounded-full bg-destructive/40"></div>
          <div className="absolute bottom-60 right-60 w-4 h-4 rounded-full bg-primary/30"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="space-y-8 animate-fade-in z-10">
              <div className="inline-block">
                <p className="text-destructive font-semibold text-lg md:text-xl mb-4">
                  Smart Gifts de Skandia
                </p>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Un regalo que{" "}
                <span className="relative inline-block">
                  <span className="text-primary relative z-10">crece</span>
                  <img 
                    src={santaHat} 
                    alt="" 
                    className="absolute -top-6 -left-4 md:-top-10 md:-left-6 w-10 h-10 md:w-14 md:h-14 -rotate-12 opacity-90"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </span>
                {" "}con el tiempo.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Papá Noel y Skandia presentan los Smart Gifts: una nueva forma de regalar oportunidades.
              </p>
                
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-base border-2"
                  onClick={() => navigate("/activar")}
                >
                  Activar mi regalo
                </Button>
              </div>
            </div>

            {/* Right side - Hero image with decorative circle */}
            <div className="relative z-10 animate-scale-in">
              <div className="relative">
                {/* Decorative circle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200/60 to-pink-300/40 rounded-full transform scale-105 blur-2xl"></div>
                
                {/* Main image */}
                <div className="relative rounded-full overflow-hidden aspect-square border-8 border-background shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Pareja feliz con Smart Gift de Skandia" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Additional decorative dots around image */}
                <div className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                <div className="absolute top-1/4 -right-8 w-3 h-3 rounded-full bg-destructive/50"></div>
                <div className="absolute bottom-1/4 -left-6 w-4 h-4 rounded-full bg-yellow-400/60"></div>
                <div className="absolute -bottom-2 right-1/4 w-3 h-3 rounded-full bg-blue-400/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 relative">
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-2 h-2 rounded-full bg-primary/30"></div>
          <div className="absolute bottom-40 right-32 w-3 h-3 rounded-full bg-destructive/20"></div>
          <div className="absolute top-60 right-20 w-2 h-2 rounded-full bg-yellow-400/30"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Card 1 */}
            <div className="group bg-card rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Gift className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold">Regala con propósito</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Cada Smart Gift es una inversión que crece con el tiempo. Elige el diseño, el monto y añade un mensaje personalizado.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-card rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold">Construye futuro</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Tu regalo se convierte en el primer paso hacia la libertad financiera. Un asesor Skandia guiará cada decisión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivateGiftHome;

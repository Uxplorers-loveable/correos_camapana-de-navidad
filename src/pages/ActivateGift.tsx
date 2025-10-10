import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GiftCard from "@/components/GiftCard";
import Snowfall from "@/components/Snowfall";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, Gift, TrendingUp, Shield, PiggyBank } from "lucide-react";

const investmentOptions = [
  {
    icon: TrendingUp,
    title: "Tu primera inversión",
    description: "Comienza tu camino hacia la libertad financiera con un portafolio diversificado",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: PiggyBank,
    title: "Fondo de emergencias",
    description: "Construye tu red de seguridad para estar preparado ante cualquier imprevisto",
    color: "text-secondary",
    bgColor: "bg-secondary/20"
  },
  {
    icon: Shield,
    title: "Protección familiar",
    description: "Protege a tu familia mientras ahorras para el futuro",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Gift,
    title: "Portafolio de inversión",
    description: "Crea un portafolio completo y haz crecer tu patrimonio",
    color: "text-[hsl(152,65%,35%)]",
    bgColor: "bg-[hsl(152,65%,35%)]/10"
  }
];

const ActivateGift = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"intro" | "options" | "form">("intro");
  const [formData, setFormData] = useState({
    name: "",
    document: "",
    email: "",
    phone: "",
  });

  // Datos de ejemplo del regalo recibido
  const giftData = {
    template: 2 as 1 | 2 | 3,
    amount: "500,000",
    message: "Este regalo es el comienzo de tu libertad financiera. ¡Que crezca contigo!",
    from: "Papá Noel & Familia",
    to: "Ti",
  };

  const handleActivate = () => {
    if (!formData.name || !formData.document || !formData.email || !formData.phone) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    
    toast.success("¡Smart Gift activado!", {
      description: "En unos días, Papá Noel y Skandia te escribirán para darte la bienvenida a tu nueva historia de inversión.",
    });
    
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
      {step === "form" && <Snowfall />}
      
      <div className="container mx-auto px-4 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        {step === "intro" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                ¡Has recibido un Smart Gift! 🎁
              </h1>
              <p className="text-xl text-muted-foreground">
                Papá Noel y tus seres queridos creen en tu futuro
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
              <GiftCard {...giftData} className="mx-auto mb-6" />
              
              <div className="text-center space-y-4">
                <p className="text-lg">
                  <span className="font-semibold text-primary">{giftData.from}</span> te ha enviado un regalo que no se guarda, 
                  <span className="font-semibold"> se activa</span>.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">
                  ⏰ Tienes 30 días para activar tu regalo
                </div>
                <Button 
                  size="lg"
                  variant="skandia"
                  onClick={() => setStep("options")}
                >
                  Activar mi Smart Gift
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "options" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Qué puedes lograr con tu Smart Gift?
              </h2>
              <p className="text-xl text-muted-foreground">
                El mejor regalo es elegir un futuro que te libere
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {investmentOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 rounded-2xl bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 cursor-pointer card-reveal"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-14 h-14 rounded-full ${option.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 ${option.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                variant="skandia"
                onClick={() => setStep("form")}
              >
                Explorar opciones de inversión
              </Button>
            </div>
          </div>
        )}

        {step === "form" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Agenda tu asesoría personalizada
              </h2>
              <p className="text-xl text-muted-foreground">
                Un asesor Skandia te ayudará a activar tu regalo para que crezca contigo
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="document">Documento de identidad</Label>
                  <Input
                    id="document"
                    placeholder="Número de documento"
                    value={formData.document}
                    onChange={(e) => setFormData(prev => ({ ...prev, document: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+57 300 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>

                <Button 
                  size="lg"
                  variant="skandia"
                  className="w-full"
                  onClick={handleActivate}
                >
                  Confirmar activación
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivateGift;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StepIndicator from "@/components/StepIndicator";
import GiftCard from "@/components/GiftCard";
import Snowfall from "@/components/Snowfall";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight } from "lucide-react";

const steps = ["Datos", "Diseño", "Monto", "Detalles", "Confirmar"];

const CreateGift = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    template: 1 as 1 | 2 | 3,
    amount: "",
    occasion: "",
    message: "",
    from: "",
    to: "",
    deliveryMethod: "",
    deliveryDate: "",
    deliveryTime: "",
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0:
        if (!formData.email || !formData.phone) {
          toast.error("Por favor completa todos los campos");
          return false;
        }
        break;
      case 2:
        if (!formData.amount || !formData.occasion) {
          toast.error("Por favor completa todos los campos");
          return false;
        }
        break;
      case 3:
        if (!formData.from || !formData.to || !formData.deliveryMethod) {
          toast.error("Por favor completa todos los campos");
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = () => {
    toast.success("¡Tu Smart Gift está listo!", {
      description: "El mejor CEO del mundo y tú acaban de cambiar la historia de los regalos.",
    });
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
      <Snowfall />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Crea tu Smart Gift
          </h1>
          <p className="text-muted-foreground">
            Personaliza tu regalo inteligente paso a paso
          </p>
        </div>

        <StepIndicator steps={steps} currentStep={currentStep} />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
            {currentStep === 0 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Tus datos</h2>
                  <p className="text-muted-foreground">
                    Papá Noel necesita tus datos para registrar tu línea de inversión personalizada
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+57 300 123 4567"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Elige el diseño</h2>
                  <p className="text-muted-foreground">
                    Selecciona la envoltura mágica de tu inversión
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((template) => (
                    <button
                      key={template}
                      onClick={() => updateFormData("template", template)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-4 transition-all ${
                        formData.template === template
                          ? "border-primary shadow-lg scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <GiftCard template={template as 1 | 2 | 3} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Monto y ocasión</h2>
                  <p className="text-muted-foreground">
                    Tu regalo no es una cifra, es un sueño que empieza hoy
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="amount">Monto del regalo</Label>
                    <Input
                      id="amount"
                      type="text"
                      placeholder="500,000"
                      value={formData.amount}
                      onChange={(e) => updateFormData("amount", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="occasion">Ocasión</Label>
                    <Select value={formData.occasion} onValueChange={(value) => updateFormData("occasion", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una ocasión" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="navidad">🎄 Navidad</SelectItem>
                        <SelectItem value="cumpleanos">🎂 Cumpleaños</SelectItem>
                        <SelectItem value="grado">🎓 Graduación</SelectItem>
                        <SelectItem value="matrimonio">💍 Matrimonio</SelectItem>
                        <SelectItem value="otro">🎁 Otra ocasión</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Mensaje personalizado</Label>
                    <Textarea
                      id="message"
                      placeholder="Escribe un mensaje especial..."
                      value={formData.message}
                      onChange={(e) => updateFormData("message", e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Detalles de entrega</h2>
                  <p className="text-muted-foreground">
                    Personaliza quién lo envía y quién lo recibe
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="from">De (tu nombre)</Label>
                    <Input
                      id="from"
                      placeholder="Tu nombre"
                      value={formData.from}
                      onChange={(e) => updateFormData("from", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="to">Para (nombre del destinatario)</Label>
                    <Input
                      id="to"
                      placeholder="Nombre del destinatario"
                      value={formData.to}
                      onChange={(e) => updateFormData("to", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="deliveryMethod">Método de entrega</Label>
                    <Select value={formData.deliveryMethod} onValueChange={(value) => updateFormData("deliveryMethod", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="¿Cómo lo enviamos?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">📧 Correo electrónico</SelectItem>
                        <SelectItem value="whatsapp">💬 WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="deliveryDate">Fecha de envío</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => updateFormData("deliveryDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="deliveryTime">Hora</Label>
                      <Input
                        id="deliveryTime"
                        type="time"
                        value={formData.deliveryTime}
                        onChange={(e) => updateFormData("deliveryTime", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Confirma tu regalo</h2>
                  <p className="text-muted-foreground">
                    Revisa los detalles antes de enviar
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Para:</span>
                    <span className="font-medium">{formData.to}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">De:</span>
                    <span className="font-medium">{formData.from}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Monto:</span>
                    <span className="font-medium text-lg">${formData.amount}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Ocasión:</span>
                    <span className="font-medium capitalize">{formData.occasion}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Entrega:</span>
                    <span className="font-medium capitalize">{formData.deliveryMethod}</span>
                  </div>
                  <div className="py-2">
                    <span className="text-muted-foreground block mb-1">Mensaje:</span>
                    <p className="text-foreground italic">"{formData.message}"</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {currentStep > 0 && (
                <Button variant="outline" onClick={prevStep} className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
              )}
              {currentStep < steps.length - 1 ? (
                <Button onClick={nextStep} className="flex-1 bg-primary">
                  Siguiente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit} 
                  className="flex-1 bg-gradient-to-r from-[hsl(var(--christmas-gold))] to-[hsl(var(--christmas-red))] text-white font-semibold shadow-[var(--shadow-festive)]"
                >
                  Confirmar y enviar
                </Button>
              )}
            </div>
          </div>

          {/* Preview Section */}
          <div className="sticky top-8">
            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
              <h3 className="text-lg font-semibold mb-4 text-center">Vista previa</h3>
              <GiftCard
                template={formData.template}
                amount={formData.amount}
                message={formData.message}
                from={formData.from}
                to={formData.to}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGift;

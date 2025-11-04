import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GiftCard from "@/components/GiftCard";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Check, Share2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const CreateGift = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(-1); // -1 = info screen, 0+ = form steps
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dataConsent: false,
    template: 1 as 1 | 2 | 3,
    amount: "",
    occasion: "",
    message: "",
    from: "",
    to: "",
  });
  const [shareableLink, setShareableLink] = useState("");

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      // Auto-select template based on occasion
      if (field === "occasion") {
        const templateMap: Record<string, 1 | 2 | 3> = {
          navidad: 1,
          cumpleanos: 2,
          grado: 3,
          matrimonio: 2,
          otro: 1,
        };
        updated.template = templateMap[value] || 1;
      }
      return updated;
    });
  };

  const formatAmount = (value: string) => {
    const numbers = value.replace(/[^\d]/g, '');
    if (!numbers) return '';
    const number = parseInt(numbers);
    return number.toLocaleString('es-CO');
  };

  const handleAmountChange = (value: string) => {
    const formatted = formatAmount(value);
    updateFormData("amount", formatted);
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0:
        if (!formData.name || !formData.email || !formData.phone || !formData.dataConsent) {
          toast.error("Por favor completa todos los campos y acepta el tratamiento de datos");
          return false;
        }
        break;
      case 1:
        if (!formData.amount || !formData.occasion) {
          toast.error("Por favor completa todos los campos");
          return false;
        }
        break;
      case 2:
        if (!formData.from || !formData.to) {
          toast.error("Por favor completa todos los campos");
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = () => {
    // Generate shareable link (in a real app, this would be an API call)
    const giftId = Math.random().toString(36).substring(2, 15);
    
    // Store gift data in localStorage
    const giftData = {
      from: formData.from,
      to: formData.to,
      amount: formData.amount,
      message: formData.message,
      occasion: formData.occasion,
      template: formData.template,
    };
    
    console.log('Saving gift data with ID:', giftId, giftData);
    localStorage.setItem(`gift_${giftId}`, JSON.stringify(giftData));
    
    // Verify it was saved
    const saved = localStorage.getItem(`gift_${giftId}`);
    console.log('Verified saved data:', saved);
    
    const link = `${window.location.origin}/activar?gift=${giftId}`;
    console.log('Generated link:', link);
    setShareableLink(link);
    setCurrentStep(4); // Go to final success screen
  };

  // Info screen before starting
  if (currentStep === -1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>

          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ¿Cómo funciona tu Smart Gift?
            </h2>
            <p className="text-lg text-muted-foreground">
              Sigue estos pasos para crear un regalo que crece con el tiempo
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 md:p-12 mb-8 animate-fade-in">
            <div className="space-y-8">
              {[
                { num: "1", title: "Crea tu Smart Gift personalizado", desc: "Elige el diseño, monto y mensaje perfecto" },
                { num: "2", title: "La persona que la reciba podrá activarla en 30 días", desc: "Tu destinatario tendrá tiempo para activar su regalo" },
                { num: "3", title: "Skandia la guiará para seleccionar su producto de inversión", desc: "Un asesor especializado le ayudará a elegir la mejor opción" },
                { num: "4", title: "Abre su producto de inversión", desc: "Cuando el destinatario complete la activación, su inversión comenzará a crecer." }
              ].map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              variant="skandia"
              onClick={() => setCurrentStep(0)}
            >
              Empezar mi regalo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Final success screen
  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              ¡Tu Smart Gift está listo!
            </h1>
            <p className="text-lg text-muted-foreground">
              Comparte el link cuando quieras y por donde quieras
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 md:p-12 mb-8 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold mb-2 block">
                  Link para compartir:
                </Label>
                <div className="flex gap-2">
                  <Input 
                    value={shareableLink} 
                    readOnly 
                    className="font-mono text-sm"
                  />
                  <Button
                    variant="skandia"
                    onClick={() => {
                      navigator.clipboard.writeText(shareableLink);
                      toast.success("Link copiado al portapapeles");
                    }}
                  >
                    Copiar
                  </Button>
                </div>
              </div>
              
              <div className="pt-4 space-y-3 text-base">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <span>Comparte este link con <strong>{formData.to}</strong> cuando quieras.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <span>Tendrá 30 días para activar su Smart Gift desde que reciba el link.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🔔</span>
                  <span>Cuando <strong>{formData.to}</strong> active su producto de inversión, recibirás una notificación para completar el pago.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="skandia"
              onClick={() => {
                const message = `🎁 ¡Hola! Te he enviado un Smart Gift de Skandia. Actívalo aquí: ${shareableLink}`;
                window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              <Share2 className="mr-2 h-5 w-5" />
              Compartir por WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                setCurrentStep(-1);
                setShareableLink("");
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  dataConsent: false,
                  template: 1 as 1 | 2 | 3,
                  amount: "",
                  occasion: "",
                  message: "",
                  from: "",
                  to: "",
                });
              }}
            >
              Crear otro Smart Gift
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Confirmation screen
  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Confirma tu regalo
            </h1>
            <p className="text-muted-foreground">
              Revisa los detalles antes de crear tu Smart Gift
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 space-y-3 text-sm animate-fade-in">
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
              {formData.message && (
                <div className="py-2">
                  <span className="text-muted-foreground block mb-1">Mensaje:</span>
                  <p className="text-foreground italic">"{formData.message}"</p>
                </div>
              )}

              <div className="flex gap-4 pt-6">
                <Button variant="outline" onClick={prevStep} className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  variant="skandia"
                  className="flex-1"
                >
                  <Check className="mr-2 h-4 w-4" />
                  Crear Smart Gift
                </Button>
              </div>
            </div>

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
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => currentStep === 0 ? setCurrentStep(-1) : prevStep()}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {currentStep === 0 ? "Volver" : "Anterior"}
        </Button>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
            {currentStep === 0 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Tus datos</h2>
                  <p className="text-muted-foreground">
                    Necesitamos tus datos de contacto
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                    />
                  </div>
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
                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox 
                      id="dataConsent"
                      checked={formData.dataConsent}
                      onCheckedChange={(checked) => updateFormData("dataConsent", checked)}
                    />
                    <label htmlFor="dataConsent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Autorizo el uso de mis datos para la creación y envío de mi Smart Gift conforme a la política de privacidad.
                    </label>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Monto y ocasión</h2>
                  <p className="text-muted-foreground">
                    Define el valor de tu Smart Gift
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="amount">Monto del regalo (COP)</Label>
                    <Input
                      id="amount"
                      type="text"
                      placeholder="500.000,00"
                      value={formData.amount}
                      onChange={(e) => handleAmountChange(e.target.value)}
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

            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Nombres</h2>
                  <p className="text-muted-foreground">
                    ¿Quién envía y quién recibe?
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
              <Button 
                onClick={nextStep} 
                variant="skandia"
                className="flex-1"
              >
                Siguiente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GiftCard from "@/components/GiftCard";
import Snowfall from "@/components/Snowfall";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Check, Share2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const CreateGift = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(-1); // -1 = info screen, 0+ = form steps
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    dataConsent: false,
    template: 1 as 1 | 2 | 3,
    amount: "",
    occasion: "",
    message: "",
    from: "",
    to: "",
    deliveryMethod: "",
    deliveryContact: "",
    deliveryDate: "",
    deliveryTime: "",
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        if (!formData.email || !formData.phone || !formData.dataConsent) {
          toast.error("Por favor completa todos los campos y acepta el tratamiento de datos");
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
        if (!formData.from || !formData.to) {
          toast.error("Por favor completa todos los campos");
          return false;
        }
        break;
      case 4:
        if (!formData.deliveryMethod || !formData.deliveryContact) {
          toast.error("Por favor completa todos los campos");
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = () => {
    setCurrentStep(7); // Go to final success screen
  };

  // Info screen before starting
  if (currentStep === -1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
        <Snowfall />
        
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              ¿Cómo funciona tu Smart Gift?
            </h1>
            <p className="text-lg text-muted-foreground">
              Sigue estos pasos para crear un regalo que crece con el tiempo
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 md:p-12 mb-8 animate-fade-in">
            <div className="space-y-8">
              {[
                { title: "Crea tu gift card personalizada", desc: "Elige el diseño, monto y mensaje perfecto" },
                { title: "Elige cuándo y cómo será entregada", desc: "Programa la fecha y selecciona el método de envío" },
                { title: "La persona que la reciba podrá activarla en 30 días", desc: "Tu destinatario tendrá tiempo para activar su regalo" },
                { title: "Skandia la guiará para seleccionar su producto de inversión", desc: "Un asesor especializado ayudará a elegir la mejor opción" },
                { title: "Te notificaremos para que realices el pago", desc: "Recibirás instrucciones para completar tu Smart Gift" }
              ].map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
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

  // Final success screen with snowfall
  if (currentStep === 7) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
        <Snowfall />
        
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              ¡Tu Smart Gift está en camino!
            </h1>
          </div>

          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 md:p-12 mb-8 space-y-6 animate-fade-in">
            <div className="space-y-4 text-lg">
              <p className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <span>El destinatario recibirá tu regalo en la fecha y hora que seleccionaste.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <span>Tendrá 30 días para activarlo y elegir su inversión.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">🔔</span>
                <span>Cuando lo active, recibirás una notificación para completar el pago.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <span>Ambos podrán hacer seguimiento a su progreso desde Skandia.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="skandia"
              onClick={() => navigate("/")}
            >
              <Share2 className="mr-2 h-5 w-5" />
              Compartir esta experiencia
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                setCurrentStep(-1);
                setFormData({
                  email: "",
                  phone: "",
                  dataConsent: false,
                  template: 1 as 1 | 2 | 3,
                  amount: "",
                  occasion: "",
                  message: "",
                  from: "",
                  to: "",
                  deliveryMethod: "",
                  deliveryContact: "",
                  deliveryDate: "",
                  deliveryTime: "",
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
  if (currentStep === 6) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
        <Snowfall />
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Confirma tu regalo
            </h1>
            <p className="text-muted-foreground">
              Revisa los detalles antes de enviar
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
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Entrega:</span>
                <span className="font-medium capitalize">{formData.deliveryMethod}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Contacto:</span>
                <span className="font-medium">{formData.deliveryContact}</span>
              </div>
              {formData.deliveryDate && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Fecha:</span>
                  <span className="font-medium">{formData.deliveryDate} {formData.deliveryTime}</span>
                </div>
              )}
              <div className="py-2">
                <span className="text-muted-foreground block mb-1">Mensaje:</span>
                <p className="text-foreground italic">"{formData.message}"</p>
              </div>

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
                  Confirmar y enviar
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
                  <h2 className="text-2xl font-bold mb-2">Elige el diseño</h2>
                  <p className="text-muted-foreground">
                    Selecciona tu diseño favorito
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

            {currentStep === 3 && (
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

            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">¿A dónde quieres que le llegue tu regalo?</h2>
                  <p className="text-muted-foreground">
                    Elige cómo enviar tu Smart Gift
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="deliveryMethod">Método</Label>
                    <Select 
                      value={formData.deliveryMethod} 
                      onValueChange={(value) => {
                        updateFormData("deliveryMethod", value);
                        updateFormData("deliveryContact", "");
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un método" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">📧 Correo electrónico</SelectItem>
                        <SelectItem value="whatsapp">💬 WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {formData.deliveryMethod === "email" && (
                    <div>
                      <Label htmlFor="deliveryContact">Correo electrónico del destinatario</Label>
                      <Input
                        id="deliveryContact"
                        type="email"
                        placeholder="destinatario@email.com"
                        value={formData.deliveryContact}
                        onChange={(e) => updateFormData("deliveryContact", e.target.value)}
                      />
                    </div>
                  )}
                  
                  {formData.deliveryMethod === "whatsapp" && (
                    <div>
                      <Label htmlFor="deliveryContact">Número de WhatsApp</Label>
                      <Input
                        id="deliveryContact"
                        type="tel"
                        placeholder="+57 300 123 4567"
                        value={formData.deliveryContact}
                        onChange={(e) => updateFormData("deliveryContact", e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Fecha de envío</h2>
                  <p className="text-muted-foreground">
                    ¿Cuándo enviamos tu Smart Gift?
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="deliveryDate">Fecha</Label>
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

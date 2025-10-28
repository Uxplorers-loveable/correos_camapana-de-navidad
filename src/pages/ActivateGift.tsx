import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GiftCard from "@/components/GiftCard";
import SmartGiftStepper from "@/components/SmartGiftStepper";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, TrendingUp, Shield, PiggyBank, Sparkles, Gift } from "lucide-react";

const investmentOptions = [
  {
    icon: Sparkles,
    title: "Tu primera inversión",
    description: "Comienza tu camino hacia la libertad financiera con un portafolio diversificado diseñado para principiantes.",
    risk: "Bajo",
    returns: "8-12% anual"
  },
  {
    icon: PiggyBank,
    title: "Fondo de emergencias",
    description: "Construye tu red de seguridad para estar preparado ante cualquier imprevisto. Liquidez inmediata cuando la necesites.",
    risk: "Muy Bajo",
    returns: "6-10% anual"
  },
  {
    icon: Shield,
    title: "Protección familiar",
    description: "Protege a tu familia mientras ahorras para el futuro. Combina seguridad con crecimiento sostenible.",
    risk: "Bajo",
    returns: "10-15% anual"
  },
  {
    icon: TrendingUp,
    title: "Portafolio de inversión",
    description: "Crea un portafolio completo y haz crecer tu patrimonio con estrategias diversificadas de inversión.",
    risk: "Medio",
    returns: "12-18% anual"
  }
];

const ActivateGift = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"narrative" | "codeEntry" | "personalData" | "intro" | "options" | "form" | "success">("narrative");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [activationData, setActivationData] = useState({
    code: "",
    name: "",
    phone: "",
    email: "",
    dataConsent: false,
  });
  const [schedulingData, setSchedulingData] = useState({
    date: "",
    time: "",
    meetingType: "virtual",
  });

  // Datos de ejemplo del regalo recibido
  const giftData = {
    template: 2 as 1 | 2 | 3,
    amount: "500.000,00",
    message: "Este regalo es el comienzo de tu libertad financiera. ¡Que crezca contigo!",
    from: "Papá Noel & Familia",
    to: "Ti",
  };

  const handleCodeSubmit = () => {
    if (!activationData.code) {
      toast.error("Por favor ingresa tu código de activación");
      return;
    }
    setStep("personalData");
  };

  const handlePersonalDataSubmit = () => {
    if (!activationData.name || !activationData.email || !activationData.phone || !activationData.dataConsent) {
      toast.error("Por favor completa todos los campos y acepta el tratamiento de datos");
      return;
    }
    setStep("intro");
  };

  const handleSchedulingSubmit = () => {
    if (!schedulingData.date || !schedulingData.time) {
      toast.error("Por favor selecciona fecha y hora para tu asesoría");
      return;
    }
    setStep("success");
  };

  // Narrative intro screen
  if (step === "narrative") {
    return (
      <div className="min-h-screen bg-gradient-subtle py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                🎁 ¡Has recibido un Smart Gift!
              </h1>
              <p className="text-2xl text-muted-foreground">
                Papá Noel y tus seres queridos creen en tu futuro.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 md:p-12 space-y-6 text-left">
              <p className="text-lg leading-relaxed">
                Esta Navidad, el mejor CEO del mundo y Skandia crearon regalos que crecen contigo.
              </p>
              <p className="text-lg leading-relaxed">
                un regalo: <span className="font-semibold text-primary">es el primer paso hacia tu libertad financiera.</span>
              </p>
              <p className="text-lg leading-relaxed">
                Aquí podrás activarla, descubrir qué puedes lograr con ella y recibir asesoría personalizada para hacerla crecer.
              </p>
              <div className="pt-4 border-t">
                <p className="text-xl font-semibold text-center">
                  🌱 No estás recibiendo un regalo. Estás comenzando una historia.
                </p>
              </div>
            </div>

            <Button 
              size="lg"
              variant="skandia"
              onClick={() => setStep("codeEntry")}
            >
              Descubre tu regalo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Success screen - NEW MODERN LAYOUT
  if (step === "success") {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto shadow-2xl">
                  <Sparkles className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
                ¡Felicidades!
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Tu asesoría ha sido confirmada
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Papá Noel y Skandia te dan la bienvenida al futuro que estás construyendo. Este es el primer paso hacia tu libertad financiera.
              </p>
            </div>

            {/* Stepper showing progress */}
            <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 border border-primary/10">
              <SmartGiftStepper currentStep={2} showTitle={true} />
            </div>

            {/* Learning Center */}
            <div className="bg-card rounded-3xl shadow-[var(--shadow-elevated)] overflow-hidden border border-border">
              <div className="bg-primary p-8 md:p-10 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <span className="text-4xl">📚</span>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Tu centro de aprendizaje</h2>
                    <p className="text-white/90 text-lg mt-1">
                      Desde ya puedes explorar estos recursos educativos diseñados especialmente para ti
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <a href="#" className="group bg-white rounded-xl p-6 border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">📊</span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Introducción a los fondos de inversión</h3>
                    <p className="text-sm text-muted-foreground">Aprende los conceptos básicos de inversión</p>
                  </a>

                  <a href="#" className="group bg-white rounded-xl p-6 border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">💡</span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Cómo diversificar tu portafolio</h3>
                    <p className="text-sm text-muted-foreground">Estrategias para proteger tu inversión</p>
                  </a>

                  <a href="#" className="group bg-white rounded-xl p-6 border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">📈</span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Entendiendo el riesgo vs rentabilidad</h3>
                    <p className="text-sm text-muted-foreground">Balance entre seguridad y crecimiento</p>
                  </a>
                </div>

                <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 text-center">
                  <p className="font-semibold text-primary text-lg">
                    ✨ Tienes acceso completo al Centro de Aprendizaje Skandia por haber activado tu Smart Gift
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                variant="skandia"
                onClick={() => navigate("/")}
                className="text-lg px-12 h-14"
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Activation code entry screen
  if (step === "codeEntry") {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12 flex items-center">
        <div className="container mx-auto px-4 max-w-xl">
          <Button
            variant="ghost"
            onClick={() => setStep("narrative")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>

          <div className="bg-card rounded-3xl shadow-[var(--shadow-card)] p-10 md:p-14 space-y-8 animate-fade-in">
            <div className="text-center space-y-6">
              <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Gift className="h-14 w-14 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                  ¡Tienes un regalo esperándote!
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  Ingresa tu código de activación para descubrir tu regalo de inversión
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="code" className="text-base font-semibold">Código de activación</Label>
                <Input
                  id="code"
                  placeholder="Ingresa tu código aquí"
                  value={activationData.code}
                  onChange={(e) => setActivationData(prev => ({ ...prev, code: e.target.value }))}
                  className="text-xl tracking-wider text-center h-14"
                />
                <p className="text-sm text-muted-foreground text-center">
                  Deberías haber recibido este código por email o WhatsApp
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold text-blue-900">¿Primera vez invirtiendo?</span>{" "}
                    <span className="text-blue-800">No te preocupes, te guiaremos paso a paso y tendrás acceso a contenido educativo personalizado.</span>
                  </p>
                </div>
              </div>

              <div className="text-center py-3">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-50 border border-amber-200 rounded-full text-sm font-medium text-amber-900">
                  ⏰ Tienes 30 días para activar tu regalo
                </div>
              </div>

              <Button 
                size="lg"
                variant="skandia"
                className="w-full h-14 text-lg"
                onClick={handleCodeSubmit}
              >
                <Gift className="mr-2 h-5 w-5" />
                Activar mi Smart Gift
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Personal data entry screen
  if (step === "personalData") {
    return (
      <div className="min-h-screen bg-gradient-subtle py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Button
            variant="ghost"
            onClick={() => setStep("codeEntry")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>

          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Completa tus datos
              </h1>
              <p className="text-xl text-muted-foreground">
                Para continuar, necesitamos algunos datos básicos
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 space-y-6">
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre completo"
                  value={activationData.name}
                  onChange={(e) => setActivationData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="phone">Número de celular *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+57 300 123 4567"
                  value={activationData.phone}
                  onChange={(e) => setActivationData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={activationData.email}
                  onChange={(e) => setActivationData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="dataConsent"
                  checked={activationData.dataConsent}
                  onChange={(e) => setActivationData(prev => ({ ...prev, dataConsent: e.target.checked }))}
                  className="mt-1"
                />
                <Label htmlFor="dataConsent" className="font-normal text-sm cursor-pointer">
                  Autorizo el uso de mis datos para la activación de mi Smart Gift conforme a la política de privacidad.
                </Label>
              </div>

              <Button 
                size="lg"
                variant="skandia"
                className="w-full"
                onClick={handlePersonalDataSubmit}
              >
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => {
            if (step === "intro") setStep("personalData");
            else if (step === "options") setStep("intro");
            else if (step === "form") setStep("options");
            else navigate("/");
          }}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        {step === "intro" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Tu Smart Gift
              </h1>
              <p className="text-xl text-muted-foreground">
                <span className="font-semibold text-primary">{giftData.from}</span> te ha enviado un regalo que no se guarda, se activa.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
              <GiftCard {...giftData} className="mx-auto mb-6" />
              
              <div className="text-center space-y-4">
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
            {/* Stepper */}
            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 mb-8">
              <SmartGiftStepper currentStep={0} />
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Que quisieras lograr con tu Smart Gift?
              </h2>
              <p className="text-xl text-muted-foreground">
                El mejor regalo es elegir un futuro que te libere
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {investmentOptions.map((option, index) => {
                const Icon = option.icon;
                const isSelected = selectedOption === index;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    className={`p-6 rounded-2xl bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 text-left card-reveal border-2 ${
                      isSelected ? "border-primary" : "border-transparent"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        option.risk === "Muy Bajo" ? "bg-green-100 text-green-700" :
                        option.risk === "Bajo" ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        Riesgo {option.risk}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-3">{option.description}</p>
                    <p className="text-sm font-semibold text-primary">{option.returns}</p>
                  </button>
                );
              })}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                variant="skandia"
                onClick={() => setStep("form")}
                disabled={selectedOption === null}
              >
                {selectedOption !== null ? "Agendar asesoría para iniciar" : "Selecciona una opción"}
              </Button>
            </div>
          </div>
        )}

        {step === "form" && selectedOption !== null && (
          <div className="space-y-8 animate-fade-in">
            {/* Stepper */}
            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 mb-8">
              <SmartGiftStepper currentStep={1} />
            </div>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {selectedOption === 0 ? "Inicia tu primera inversión con un experto" :
                 selectedOption === 1 ? "Inicia tu fondo de emergencia con un experto" :
                 selectedOption === 2 ? "Inicia tu protección familiar con un experto" :
                 "Inicia tu portafolio de inversión con un experto"}
              </h2>
              <p className="text-xl text-muted-foreground">
                Selecciona el día, hora y tipo de reunión para tu asesoría personalizada
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Left side - Why Schedule & Advisors */}
              <div className="space-y-6">
                {/* Why Schedule */}
                <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">⭐</span>
                    <h3 className="text-xl font-bold">¿Por qué agendar una cita?</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Estrategia Personalizada</h4>
                        <p className="text-sm text-muted-foreground">Análisis de tu perfil y objetivos específicos</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📈</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Maximiza tu Rentabilidad</h4>
                        <p className="text-sm text-muted-foreground">Estrategias probadas para optimizar tus inversiones</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Gestión de Riesgos</h4>
                        <p className="text-sm text-muted-foreground">Aprende a proteger y hacer crecer tu dinero</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advisors */}
                <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Nuestros Asesores</h3>
                    <p className="text-sm text-muted-foreground">Profesionales certificados listos para ayudarte</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 rounded-lg border">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-700 font-bold">MR</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">María Rodríguez</h4>
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-sm text-muted-foreground">4.9</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Asesora Senior • 8 años</p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs px-2 py-1 bg-secondary/20 rounded">Fondos de inversión</span>
                          <span className="text-xs px-2 py-1 bg-secondary/20 rounded">Planificación</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-lg border">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-700 font-bold">CM</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Carlos Méndez</h4>
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-sm text-muted-foreground">4.8</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Especialista en Portafolios • 12 años</p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs px-2 py-1 bg-secondary/20 rounded">Diversificación</span>
                          <span className="text-xs px-2 py-1 bg-secondary/20 rounded">Análisis</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Scheduling Form */}
              <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Agenda tu Asesoría</h3>
                  <p className="text-sm text-muted-foreground">Selecciona tu horario preferido</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="date">Fecha *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={schedulingData.date}
                      onChange={(e) => setSchedulingData(prev => ({ ...prev, date: e.target.value }))}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <Label htmlFor="time">Hora *</Label>
                    <select
                      id="time"
                      value={schedulingData.time}
                      onChange={(e) => setSchedulingData(prev => ({ ...prev, time: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="">Selecciona una hora</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <Label className="mb-3 block">Tipo de reunión *</Label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-accent/5 transition-colors">
                        <input 
                          type="radio" 
                          name="meetingType" 
                          value="virtual" 
                          checked={schedulingData.meetingType === "virtual"}
                          onChange={(e) => setSchedulingData(prev => ({ ...prev, meetingType: e.target.value }))}
                          className="text-primary" 
                        />
                        <div className="flex items-center gap-2">
                          <span className="text-primary">📹</span>
                          <div>
                            <div className="font-medium">Videollamada</div>
                            <div className="text-xs text-muted-foreground">Reunión virtual por Google Meet</div>
                          </div>
                        </div>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-accent/5 transition-colors">
                        <input 
                          type="radio" 
                          name="meetingType" 
                          value="phone"
                          checked={schedulingData.meetingType === "phone"}
                          onChange={(e) => setSchedulingData(prev => ({ ...prev, meetingType: e.target.value }))}
                          className="text-primary" 
                        />
                        <div className="flex items-center gap-2">
                          <span className="text-primary">📞</span>
                          <div>
                            <div className="font-medium">Llamada telefónica</div>
                            <div className="text-xs text-muted-foreground">Llamada directa a tu teléfono</div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800">
                      <strong>✓ Consulta gratuita:</strong> Esta primera asesoría es completamente gratuita y sin compromiso.
                    </p>
                  </div>

                  <Button 
                    size="lg"
                    variant="skandia"
                    className="w-full"
                    onClick={handleSchedulingSubmit}
                  >
                    Confirmar asesoría
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivateGift;

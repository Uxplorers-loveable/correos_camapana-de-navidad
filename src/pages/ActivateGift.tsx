import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import GiftCard from "@/components/GiftCard";
import SmartGiftStepper from "@/components/SmartGiftStepper";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, Sparkles, Gift } from "lucide-react";
import skandiaChannelPreview from "@/assets/skandia-channel-preview.jpg";
const ActivateGift = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"narrative" | "codeEntry" | "personalData" | "intro" | "benefits" | "mobileRedirect" | "success">("narrative");
  const [activationData, setActivationData] = useState({
    code: "",
    name: "",
    phone: "",
    email: "",
    dataConsent: false,
    termsAccepted: false,
    ficInfoAccepted: false
  });

  // Datos de ejemplo del regalo recibido
  const giftData = {
    template: 2 as 1 | 2 | 3,
    amount: "500.000,00",
    message: "Este regalo es el comienzo de tu libertad financiera. ¡Que crezca contigo!",
    from: "Papá Noel & Familia",
    to: "Ti"
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

  // Narrative intro screen
  if (step === "narrative") {
    return <div className="min-h-screen bg-gradient-subtle py-16">
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
                Esta Smart Gift es más que un regalo: <span className="font-semibold text-primary">es el primer paso hacia tu libertad financiera.</span>
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

            <Button size="lg" variant="skandia" onClick={() => setStep("codeEntry")}>
              Descubre tu regalo
            </Button>
          </div>
        </div>
      </div>;
  }

  // Mobile redirect screen
  if (step === "mobileRedirect") {
    return (
      <div className="min-h-screen bg-gradient-subtle py-16 flex items-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-3xl shadow-[var(--shadow-elevated)] p-10 md:p-16 space-y-10 animate-fade-in text-center">
            {/* Icon */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-5xl">📱</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-primary">
                ¡Tu historia continúa desde tu celular!
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Este es el momento que has estado esperando
              </p>
            </div>

            {/* Content */}
            <div className="bg-primary/5 rounded-2xl p-8 space-y-6 border-2 border-primary/20">
              <p className="text-lg leading-relaxed">
                Papá Noel y Skandia han preparado algo especial: <span className="font-semibold text-primary">un proceso súper rápido y sencillo</span> para completar tu vinculación.
              </p>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Rápido y simple</h3>
                    <p className="text-muted-foreground">Solo te tomará unos minutos desde tu celular</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Seguro y protegido</h3>
                    <p className="text-muted-foreground">Tu información está completamente protegida</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Paso a paso</h3>
                    <p className="text-muted-foreground">Te guiaremos en cada momento del proceso</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
              <p className="text-base font-semibold text-amber-900 mb-2">
                📩 Revisa tu WhatsApp y tu correo
              </p>
              <p className="text-sm text-amber-800">
                Te hemos enviado un enlace para continuar tu proceso de vinculación. ¡Es momento de convertir tu regalo en realidad!
              </p>
            </div>

            {/* Footer message */}
            <div className="pt-6 border-t border-border">
              <p className="text-lg text-muted-foreground italic">
                Tu fondo de emergencias te está esperando. 🌱
              </p>
            </div>

            {/* Optional: Button to go back home */}
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate("/")}
              className="mt-4"
            >
              Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Success screen
  if (step === "success") {
    return <div className="min-h-screen bg-gradient-subtle py-12">
        
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
                ¡Tu vinculación ha iniciado!
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Bienvenido a tu fondo de emergencias
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Papá Noel y Skandia te dan la bienvenida al futuro que estás construyendo. Este es el primer paso hacia tu tranquilidad financiera.
              </p>
            </div>

            {/* Stepper showing progress */}
            <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 border border-primary/10">
              <SmartGiftStepper currentStep={1} showTitle={true} />
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
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <a href="https://channel.skandia.com.co/path-player?courseid=mesa-redonda&unit=68d5ae516f0360a20408338cUnit" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <img src={skandiaChannelPreview} alt="Skandia Channel Preview" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">📊</span>
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Introducción a los fondos de inversión</h3>
                      <p className="text-sm text-muted-foreground">Aprende los conceptos básicos de inversión</p>
                    </div>
                  </a>

                  <a href="https://channel.skandia.com.co/path-player?courseid=desencriptando-el-mundo-bitcoin&unit=6750bbcbaab85af6c40b7684Unit" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <img src={skandiaChannelPreview} alt="Skandia Channel Preview" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">💡</span>
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Cómo diversificar tu portafolio</h3>
                      <p className="text-sm text-muted-foreground">Estrategias para proteger tu inversión</p>
                    </div>
                  </a>

                  <a href="https://channel.skandia.com.co/path-player?courseid=back-to-skool-5&unit=67d7a99a83630114390a8a27Unit" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <img src={skandiaChannelPreview} alt="Skandia Channel Preview" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">📈</span>
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Entendiendo el riesgo vs rentabilidad</h3>
                      <p className="text-sm text-muted-foreground">Balance entre seguridad y crecimiento</p>
                    </div>
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
              <Button size="lg" variant="skandia" onClick={() => navigate("/")} className="text-lg px-12 h-14">
                Volver al inicio
              </Button>
            </div>
          </div>
        </div>
      </div>;
  }

  // Activation code entry screen
  if (step === "codeEntry") {
    return <div className="min-h-screen bg-gradient-subtle py-12 flex items-center">
        <div className="container mx-auto px-4 max-w-xl">
          <Button variant="ghost" onClick={() => setStep("narrative")} className="mb-8">
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
                <Input id="code" placeholder="Ingresa tu código aquí" value={activationData.code} onChange={e => setActivationData(prev => ({
                ...prev,
                code: e.target.value
              }))} className="text-xl tracking-wider text-center h-14" />
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

              <Button size="lg" variant="skandia" className="w-full h-14 text-lg" onClick={handleCodeSubmit}>
                <Gift className="mr-2 h-5 w-5" />
                Activar mi Smart Gift
              </Button>
            </div>
          </div>
        </div>
      </div>;
  }

  // Personal data entry screen
  if (step === "personalData") {
    return <div className="min-h-screen bg-gradient-subtle py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Button variant="ghost" onClick={() => setStep("codeEntry")} className="mb-6">
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
                <Input id="name" placeholder="Tu nombre completo" value={activationData.name} onChange={e => setActivationData(prev => ({
                ...prev,
                name: e.target.value
              }))} />
              </div>

              <div>
                <Label htmlFor="phone">Número de celular *</Label>
                <Input id="phone" type="tel" placeholder="+57 300 123 4567" value={activationData.phone} onChange={e => setActivationData(prev => ({
                ...prev,
                phone: e.target.value
              }))} />
              </div>

              <div>
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input id="email" type="email" placeholder="tu@email.com" value={activationData.email} onChange={e => setActivationData(prev => ({
                ...prev,
                email: e.target.value
              }))} />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="dataConsent" checked={activationData.dataConsent} onChange={e => setActivationData(prev => ({
                ...prev,
                dataConsent: e.target.checked
              }))} className="mt-1" />
                <Label htmlFor="dataConsent" className="font-normal text-sm cursor-pointer">
                  Autorizo el uso de mis datos para la activación de mi Smart Gift conforme a la política de privacidad.
                </Label>
              </div>

              <Button size="lg" variant="skandia" className="w-full" onClick={handlePersonalDataSubmit}>
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button variant="ghost" onClick={() => {
        if (step === "intro") setStep("personalData");else if (step === "benefits") setStep("intro");else navigate("/");
      }} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        {step === "intro" && <div className="space-y-8 animate-fade-in">
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
                <Button size="lg" variant="skandia" onClick={() => setStep("benefits")}>
                  Activar mi Smart Gift
                </Button>
              </div>
            </div>
          </div>}

        {step === "benefits" && <div className="space-y-12 animate-fade-in max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center space-y-6 pt-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              
              <div className="space-y-4">
                
                
                <div className="max-w-2xl mx-auto space-y-3">
                  <p className="text-2xl font-semibold text-primary md:text-4xl">
                    Tu Smart Gift se convierte en tu fondo de emergencias
                  </p>
                  <p className="text-lg text-black md:text-xl">
                    Al vincularte, comienzas a construir tu fondo de emergencias, un lugar donde tu dinero crece sin riesgos y te brinda tranquilidad cuando más lo necesitas.
                  </p>
                </div>
              </div>
            </div>

            {/* Historia del producto - Card destacada */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-xl"></div>
              
            </div>

            {/* Beneficios principales */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center md:text-2xl">💡 Lo que hace especial tu fondo</h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Beneficio 1 */}
                <div className="group bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-border hover:border-primary/30">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl">🛡️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Tu tranquilidad garantizada</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Invierte en un fondo de bajo riesgo que protege tu dinero.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Beneficio 2 */}
                <div className="group bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-border hover:border-primary/30">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl">💰</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Tu dinero siempre disponible</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Accede a él fácilmente cuando lo necesites.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Beneficio 3 */}
                <div className="group bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-border hover:border-primary/30">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl">📈</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Crecimiento constante</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Tu regalo genera rendimientos mientras te da seguridad.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Beneficio 4 */}
                <div className="group bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-border hover:border-primary/30">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl">👥</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Gestión experta</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Un equipo de Skandia se encarga de hacer crecer tu inversión.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Beneficio 5 - ocupa 2 columnas en desktop */}
                <div className="group bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-border hover:border-primary/30 sm:col-span-2 lg:col-span-1">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">100% digital</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Actívalo y adminístralo desde cualquier lugar, sin complicaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-8 py-8 max-w-3xl mx-auto">
              {/* T&C Checkboxes */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Checkbox 
                    id="termsAccepted" 
                    checked={activationData.termsAccepted}
                    onCheckedChange={(checked) => setActivationData(prev => ({
                      ...prev,
                      termsAccepted: checked as boolean
                    }))}
                    className="mt-1 flex-shrink-0"
                  />
                  <Label htmlFor="termsAccepted" className="font-normal text-base cursor-pointer leading-relaxed">
                    Acepto y reconozco que he leído los Términos y Condiciones de la vinculación al FIC Efectivo.
                  </Label>
                </div>

                <div className="flex items-start gap-4">
                  <Checkbox 
                    id="ficInfoAccepted" 
                    checked={activationData.ficInfoAccepted}
                    onCheckedChange={(checked) => setActivationData(prev => ({
                      ...prev,
                      ficInfoAccepted: checked as boolean
                    }))}
                    className="mt-1 flex-shrink-0"
                  />
                  <Label htmlFor="ficInfoAccepted" className="font-normal text-base cursor-pointer leading-relaxed">
                    Acepto y reconozco que la información diligenciada en la experiencia corresponde a la afiliación del FIC Skandia Efectivo administrado por Skandia Fiduciaria S.A.
                  </Label>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center space-y-4">
                <Button 
                  size="lg" 
                  variant="skandia" 
                  onClick={async () => {
                    if (!activationData.termsAccepted || !activationData.ficInfoAccepted) {
                      toast.error("Por favor acepta los términos y condiciones para continuar");
                      return;
                    }
                    
                    // Enviar datos al webhook
                    const webhookUrl = "YOUR_WEBHOOK_URL_HERE"; // Reemplazar con tu webhook
                    try {
                      await fetch(webhookUrl, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        mode: "no-cors",
                        body: JSON.stringify({
                          code: activationData.code,
                          name: activationData.name,
                          phone: activationData.phone,
                          email: activationData.email,
                          timestamp: new Date().toISOString(),
                        }),
                      });
                      console.log("Datos enviados al webhook");
                    } catch (error) {
                      console.error("Error al enviar datos:", error);
                    }
                    
                    setStep("mobileRedirect");
                  }} 
                  className="text-lg px-12 h-14 shadow-lg hover:shadow-xl"
                  disabled={!activationData.termsAccepted || !activationData.ficInfoAccepted}
                >
                  Iniciar vinculación a mi fondo
                </Button>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Empieza hoy tu fondo de emergencias y convierte tu regalo en tranquilidad financiera.
                </p>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
export default ActivateGift;
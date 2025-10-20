import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface SmartGiftStepperProps {
  currentStep: number; // 0-3 representing which step is active
}

const steps = [
  {
    number: 1,
    emoji: "1️⃣",
    title: "Selecciona tu producto de inversión",
    description: "Elige el que mejor se adapte a tu objetivo.",
  },
  {
    number: 2,
    emoji: "2️⃣",
    title: "Agenda tu asesoría personalizada",
    description: "Programa una cita para resolver tus dudas y definir tu inversión.",
  },
  {
    number: 3,
    emoji: "3️⃣",
    title: "Activa tu inversión con tu asesor",
    description: "Completa el proceso con su acompañamiento.",
  },
  {
    number: 4,
    emoji: "4️⃣",
    title: "Tu regalo se completa",
    description: "El remitente recibirá las instrucciones de pago.",
  },
];

const SmartGiftStepper = ({ currentStep }: SmartGiftStepperProps) => {
  return (
    <div className="w-full">
      <div className="mb-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Tus próximos pasos con Smart Gift</h3>
      </div>

      {/* Horizontal Stepper */}
      <div className="relative">
        {/* Connection Lines Container */}
        <div className="absolute top-8 left-0 right-0 hidden md:flex items-center justify-between px-12">
          {steps.slice(0, -1).map((_, index) => (
            <div
              key={index}
              className="flex-1 h-1 mx-4"
            >
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  index < currentStep ? "bg-primary" : "bg-muted"
                )}
              />
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const isFuture = index > currentStep;

            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step Circle */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-500 shadow-md z-10 relative",
                    isCompleted && "bg-primary text-white",
                    isActive && "bg-primary text-white shadow-[0_0_15px_rgba(0,177,169,0.4)]",
                    isFuture && "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-6 w-6 stroke-[3]" />
                  ) : (
                    <span className="text-lg">{step.number}</span>
                  )}
                  
                  {/* Active Pulse Effect */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-primary animate-ping opacity-20" />
                  )}
                </div>

                {/* Step Content */}
                <div className="mt-4 space-y-2">
                  <h4
                    className={cn(
                      "font-bold text-base md:text-lg transition-colors duration-300",
                      isCompleted && "text-primary",
                      isActive && "text-primary",
                      isFuture && "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={cn(
                      "text-sm leading-relaxed transition-colors duration-300",
                      isCompleted && "text-muted-foreground",
                      isActive && "text-foreground",
                      isFuture && "text-muted-foreground/70"
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SmartGiftStepper;

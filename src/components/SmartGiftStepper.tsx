import { cn } from "@/lib/utils";
import { CheckCircle2, Circle } from "lucide-react";

interface SmartGiftStepperProps {
  currentStep: number; // 0-3 representing which step is active
}

const steps = [
  {
    number: 1,
    title: "Selecciona tu producto de inversión",
    description: "Elige el que mejor se adapte a tu objetivo.",
  },
  {
    number: 2,
    title: "Agenda tu asesoría personalizada",
    description: "Programa una cita para resolver tus dudas y definir tu inversión.",
  },
  {
    number: 3,
    title: "Activa tu inversión con tu asesor",
    description: "Completa el proceso con su acompañamiento.",
  },
  {
    number: 4,
    title: "Tu regalo se completa",
    description: "El remitente recibirá las instrucciones de pago.",
  },
];

const SmartGiftStepper = ({ currentStep }: SmartGiftStepperProps) => {
  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Tus próximos pasos con Smart Gift</h3>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isFuture = index > currentStep;

          return (
            <div
              key={step.number}
              className={cn(
                "relative flex gap-4 p-6 rounded-2xl border-2 transition-all duration-300",
                isCompleted && "bg-primary/10 border-primary/30",
                isActive && "bg-card border-primary shadow-lg scale-[1.02]",
                isFuture && "bg-muted/30 border-muted"
              )}
            >
              {/* Step Number/Icon */}
              <div className="flex-shrink-0">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300",
                    isCompleted && "bg-primary text-white",
                    isActive && "bg-secondary text-secondary-foreground shadow-md",
                    isFuture && "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 min-w-0">
                <h4
                  className={cn(
                    "font-bold text-lg mb-1",
                    isCompleted && "text-primary",
                    isActive && "text-foreground",
                    isFuture && "text-muted-foreground"
                  )}
                >
                  {step.title}
                </h4>
                <p
                  className={cn(
                    "text-sm",
                    isCompleted && "text-primary/80",
                    isActive && "text-muted-foreground",
                    isFuture && "text-muted-foreground/60"
                  )}
                >
                  {step.description}
                </p>
              </div>

              {/* Active Indicator */}
              {isActive && (
                <div className="absolute -right-1 -top-1">
                  <div className="w-6 h-6 rounded-full bg-secondary animate-pulse" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmartGiftStepper;

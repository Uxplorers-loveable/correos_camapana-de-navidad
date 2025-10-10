import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                  index < currentStep
                    ? "bg-primary text-primary-foreground"
                    : index === currentStep
                    ? "bg-secondary text-secondary-foreground shadow-[var(--shadow-festive)]"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {index < currentStep ? "✓" : index + 1}
              </div>
              <div className="mt-2 text-xs text-center font-medium hidden sm:block">
                {step}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2">
                <div
                  className={cn(
                    "h-full rounded transition-all duration-300",
                    index < currentStep ? "bg-primary" : "bg-muted"
                  )}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;

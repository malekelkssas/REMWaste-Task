import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  label: string;
  completed: boolean;
  current: boolean;
}

const ProgressSteps = () => {
  const steps: Step[] = [
    { label: "Postcode", completed: true, current: false },
    { label: "Waste Type", completed: true, current: false },
    { label: "Select Skip", completed: false, current: true },
    { label: "Permit Check", completed: false, current: false },
    { label: "Choose Date", completed: false, current: false },
    { label: "Payment", completed: false, current: false },
  ];

  return (
    <div className="bg-card border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                    step.completed
                      ? "bg-blue-600 text-white"
                      : step.current
                      ? "bg-blue-600 text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step.completed ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={cn(
                    "ml-2 text-sm font-medium",
                    step.current ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-8 h-px bg-border mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
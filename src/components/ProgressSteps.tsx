import { Check, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStep, STEPS } from "@/context/StepContext";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { THEME_CONSTANTS } from "@/utils/constants";

interface ProgressStepsProps {
  hasSelectedSkip?: boolean;
}

const ProgressSteps = ({ hasSelectedSkip = false }: ProgressStepsProps) => {
  const { currentStep, completedSteps, goToNextStep, goToPreviousStep, goToStep } = useStep();
  const { theme } = useTheme();
  const currentStepIndex = STEPS.findIndex((step) => step.id === currentStep.id);
  const totalSteps = STEPS.length;

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex <= currentStepIndex || completedSteps.includes(STEPS[stepIndex].id)) {
      const targetStep = STEPS[stepIndex];
      goToStep(targetStep.id);
    }
  };

  return (
    <div className="bg-background border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Back Button for Desktop */}
        <div className="hidden md:block mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPreviousStep}
            disabled={currentStepIndex === 0}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="underline-offset-4 group-hover:underline">Back to {currentStepIndex > 0 ? STEPS[currentStepIndex - 1].label : 'Previous'}</span>
          </Button>
        </div>

        {/* Mobile Progress Indicator */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPreviousStep}
              disabled={currentStepIndex === 0}
              className="p-0 h-auto"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <span className="text-sm font-medium text-foreground">
              Step {currentStepIndex + 1} of {totalSteps}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNextStep}
              disabled={currentStepIndex === totalSteps - 1 || !hasSelectedSkip}
              className={cn(
                "p-0 h-auto",
                !hasSelectedSkip && "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Mobile Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((completedSteps.length + (currentStepIndex === STEPS.findIndex(s => s.id === currentStep.id) ? 0.5 : 0)) / totalSteps) * 100}%`,
              }}
            />
          </div>
          
          {/* Mobile Current Step Display */}
          <div className="text-center">
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full border-2 bg-background border-blue-600 text-blue-600 shadow-lg mb-2">
              {completedSteps.includes(currentStep.id) ? (
                <Check className="w-5 h-5" />
              ) : (
                <currentStep.icon className="w-5 h-5" />
              )}
            </div>
            <span className="text-sm font-medium text-foreground">
              {currentStep.label}
            </span>
          </div>
        </div>

        {/* Desktop/Tablet Full Steps Display */}
        <div className="hidden sm:block">
          <div className="relative flex items-center justify-between">
            {/* Progress Bar Foreground */}
            {completedSteps.length > 0 && (
              <div
                className="absolute top-4 h-1 bg-blue-600 transition-all duration-300 z-0"
                style={{
                  width: `${((completedSteps.length + (currentStepIndex === STEPS.findIndex(s => s.id === currentStep.id) ? 0.5 : 0)) / totalSteps) * 100}%`,
                }}
              />
            )}
            {/* Steps */}
            {STEPS.map((step, index) => {
              const isClickable = index <= currentStepIndex || completedSteps.includes(step.id);
              return (
                <div
                  key={step.id}
                  className={cn(
                    "flex flex-col items-center flex-1 min-w-0 transition-all duration-300 relative z-10",
                    isClickable && "cursor-pointer hover:opacity-80"
                  )}
                  onClick={() => isClickable && handleStepClick(index)}
                >
                  <div
                    className={cn(
                      "w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium mb-2 transition-all duration-200",
                      completedSteps.includes(step.id)
                        ? "border-blue-600 bg-blue-600 text-white"
                        : step.id === currentStep.id
                        ? "border-blue-600 text-blue-600 shadow-lg bg-background"
                        : "border-muted text-muted-foreground bg-background",
                      isClickable && "hover:scale-110",
                      theme === THEME_CONSTANTS.DARK ? "bg-gray-900" : "bg-white"
                    )}
                  >
                    {completedSteps.includes(step.id) ? (
                      <Check className={cn(
                        "w-4 h-4",
                        theme === THEME_CONSTANTS.DARK ? "text-white" : "text-blue-600"
                      )} />
                    ) : (
                      <step.icon className="w-4 h-4" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium text-center whitespace-nowrap transition-colors duration-200",
                      step.id === currentStep.id ? "text-foreground" : "text-muted-foreground",
                      isClickable && "hover:text-foreground"
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
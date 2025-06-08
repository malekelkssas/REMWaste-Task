import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStep, STEPS } from "@/context/StepContext";
import { Button } from "@/components/ui/button";

const ProgressSteps = () => {
  const { currentStep, completedSteps, goToNextStep, goToPreviousStep } = useStep();
  const currentStepIndex = STEPS.findIndex((step) => step.id === currentStep.id);
  const totalSteps = STEPS.length;

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex <= currentStepIndex || completedSteps.includes(STEPS[stepIndex].id)) {
      const targetStep = STEPS[stepIndex];
      window.location.href = targetStep.path;
    }
  };

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
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
            <span className="text-sm font-medium text-gray-900">
              Step {currentStepIndex + 1} of {totalSteps}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNextStep}
              disabled={currentStepIndex === totalSteps - 1}
              className="p-0 h-auto"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Mobile Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((completedSteps.length + (currentStepIndex === STEPS.findIndex(s => s.id === currentStep.id) ? 0.5 : 0)) / totalSteps) * 100}%`,
              }}
            />
          </div>
          
          {/* Mobile Current Step Display */}
          <div className="text-center">
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full border-2 bg-white border-blue-600 text-blue-600 shadow-lg mb-2">
              {completedSteps.includes(currentStep.id) ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-semibold">{currentStepIndex + 1}</span>
              )}
            </div>
            <span className="text-sm font-medium text-gray-900">
              {currentStep.label}
            </span>
          </div>
        </div>

        {/* Desktop/Tablet Full Steps Display */}
        <div className="hidden sm:block">
          <div className="relative flex items-center justify-between">
            {/* Progress Bar Background */}
            <div
              className="absolute top-4 left-0 right-0 h-1 bg-gray-200"
              style={{
                left: '2rem',
                right: '2rem',
              }}
            />
            {/* Progress Bar Foreground */}
            {completedSteps.length > 0 && (
              <div
                className="absolute top-4 h-1 bg-blue-600 transition-all duration-300"
                style={{
                  left: '2rem',
                  width: `calc(${(completedSteps.length / (totalSteps - 1)) * 100}%)`,
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
                    "flex flex-col items-center flex-1 min-w-0 transition-all duration-300",
                    isClickable && "cursor-pointer hover:opacity-80"
                  )}
                  onClick={() => isClickable && handleStepClick(index)}
                >
                  <div
                    className={cn(
                      "w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium mb-2 z-10 bg-white transition-all duration-200",
                      completedSteps.includes(step.id)
                        ? "border-blue-600 bg-blue-600 text-white"
                        : step.id === currentStep.id
                        ? "border-blue-600 text-blue-600 shadow-lg"
                        : "border-gray-300 text-gray-400",
                      isClickable && "hover:scale-110"
                    )}
                  >
                    {completedSteps.includes(step.id) ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium text-center whitespace-nowrap transition-colors duration-200",
                      step.id === currentStep.id ? "text-gray-900" : "text-gray-500",
                      isClickable && "hover:text-gray-900"
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
import { Button } from "@/components/ui/button";
import { SkipItem } from "@/types";
import { useStep } from "@/context/StepContext";
import { cn } from "@/lib/utils";

interface SkipSelectionFooterProps {
  selectedSkipData?: SkipItem;
  onBack: () => void;
  onContinue: () => void;
}

const SkipSelectionFooter = ({
  selectedSkipData,
  onBack,
  onContinue,
}: SkipSelectionFooterProps) => {
  const { goToPreviousStep, goToNextStep, markStepAsCompleted } = useStep();

  const handleBack = () => {
    onBack();
    goToPreviousStep();
  };

  const handleContinue = () => {
    onContinue();
    markStepAsCompleted('select-skip');
    goToNextStep();
  };

  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            {selectedSkipData?.size} Yard Skip - £{selectedSkipData?.price_before_vat} - {selectedSkipData?.hire_period_days} day hire period
          </div>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={handleBack}
            className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
          >
            Back
          </Button>
          <Button 
            className={cn(
              "bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors duration-200"
            )} 
            onClick={handleContinue}
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkipSelectionFooter;
